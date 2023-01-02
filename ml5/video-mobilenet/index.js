let mobilenet;
let puffin

function modelReady() {
    console.log("Model is Ready")
    // do predict here
    mobilenet.classify(puffin, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    }
    console.log(results)
    let label = results[0].label
    let probability = results[0].confidence
    fill(0)
    textSize(40)
    text(label, 10, height - 100)
    createP(label)
    createP(probability)
}

function imageReady() {
    image(puffin, 0, 0, width, height)
}

function setup() {
    createCanvas(640, 480);
    puffin = createImg('images/puffin.jpg', imageReady)
    puffin.hide()
    background(0)
    mobilenet = ml5.imageClassifier('MobileNet', modelReady)
}