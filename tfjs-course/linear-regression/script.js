import { TRAINING_DATA } from "https://storage.googleapis.com/jmstore/TensorFlowJS/EdX/TrainingData/real-estate-data.js";

const status = document.getElementById("status");
if (status) {
  status.innerText = "Loaded TensorFlow.js - version: " + tf.version.tfjs;
}

const inputs = TRAINING_DATA.inputs;
const outputs = TRAINING_DATA.outputs;

console.log(inputs);
console.log(outputs);

const INPUTS_TENSOR = tf.tensor2d(inputs);
const OUTPUTS_TENSOR = tf.tensor1d(outputs);

console.log(INPUTS_TENSOR);
console.log(OUTPUTS_TENSOR);

tf.util.shuffleCombo(inputs, outputs);

function normalize(tensor, min, max) {
  const result = tf.tidy(function () {
    // find the min value in the tensor
    const MIN_VALUES = min || tf.min(tensor, 0);

    // find the max value in the tensor
    const MAX_VALUES = max || tf.max(tensor, 0);

    const TENSOR_SUBTRACT_MIN_VALUE = tf.sub(tensor, MIN_VALUES);
    const RANGE_SIZE = tf.sub(MAX_VALUES, MIN_VALUES);
    const NORMALIZED_VALUES = tf.div(TENSOR_SUBTRACT_MIN_VALUE, RANGE_SIZE);

    return { NORMALIZED_VALUES, MIN_VALUES, MAX_VALUES };
  });
  return result;
}

const FEATURE_RESULTS = normalize(INPUTS_TENSOR);
console.log("Normalized Values:");
FEATURE_RESULTS.NORMALIZED_VALUES.print();

console.log("MIN Values:");
FEATURE_RESULTS.MIN_VALUES.print();

console.log("MAX Values:");
FEATURE_RESULTS.MAX_VALUES.print();

INPUTS_TENSOR.dispose();

/// END of Pre-processing

async function train() {
  const LEARNING_RATE = 0.01;

  model.compile({
    optimizer: tf.train.sgd(LEARNING_RATE),
    loss: "meanSquaredError",
  });

  let results = await model.fit(
    FEATURE_RESULTS.NORMALIZED_VALUES,
    OUTPUTS_TENSOR,
    {
      validationSplit: 0.15,
      shuffle: true,
      batchSize: 64,
      epochs: 10,
    }
  );

  OUTPUTS_TENSOR.dispose();
  FEATURE_RESULTS.NORMALIZED_VALUES.dispose();

  console.log(
    "Average error loss: " +
      Math.sqrt(results.history.loss[results.history.loss.length - 1])
  );
  console.log(
    "Average validation error loss: " +
      Math.sqrt(results.history.val_loss[results.history.val_loss.length - 1])
  );

  await evaluate();
}

const model = tf.sequential();
model.add(tf.layers.dense({ inputShape: [2], units: 1 }));
model.summary();
train();

// End of Training
function evaluate() {
  tf.tidy(function () {
    let newInput = normalize(
      tf.tensor2d([[750, 1]]),
      FEATURE_RESULTS.MIN_VALUES,
      FEATURE_RESULTS.MAX_VALUES
    );
    let output = model.predict(newInput.NORMALIZED_VALUES);
    output.print();

    // TODO: figure out model save
    // model.save("file://./my-model");
    // CLEANUP
    FEATURE_RESULTS.MIN_VALUES.dispose();
    FEATURE_RESULTS.MAX_VALUES.dispose();
    model.dispose();
    console.log(tf.memory().numTensors);
  });
}
