import tensorflow as tf
from tensorflow import keras
import numpy as np
import matplotlib.pyplot as plt


print(tf.__version__)

data = keras.datasets.fashion_mnist
(train_images, train_labels),(test_images, test_labels) = data.load_data()

class_names = ['T-shirt/top', 'Trouser', 'Pullover', 'Dress', 'Coat',
               'Sandal', 'Shirt', 'Sneaker', 'Bag', 'Ankle boot']



train_images = train_images/255.0
test_images = test_images/255.0


# plt.figure()
# plt.imshow(train_images[6])
# plt.colorbar()
# plt.grid(False)
# plt.show()

# Training Steps
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),
    keras.layers.Dense(128, activation="relu"),
    keras.layers.Dense(10, activation="softmax"),
])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
model.fit(train_images, train_labels, epochs=10)

# Testing the model
test_loss, test_acc = model.evaluate(test_images, test_labels)
print("Tested Accuracy: ", test_acc)


# Prediction using the model

prediction = model.predict(test_images)
for p in prediction:
    print(class_names[np.argmax(p)])

print("Total Predictions: ", len(prediction))

for i in range(5):
    plt.grid(False)
    plt.imshow(test_images[i], cmap=plt.cm.binary)
    plt.xlabel("Actual: "+class_names[test_labels[i]])
    plt.title("Prediction: "+ class_names[np.argmax(prediction[i])])
    plt.show()