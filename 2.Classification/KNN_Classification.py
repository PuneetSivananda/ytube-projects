import sklearn
from sklearn.utils import shuffle
from sklearn.neighbors import KNeighborsClassifier
from sklearn import linear_model, preprocessing
from sklearn.model_selection import train_test_split
import pandas as pd
import numpy as np


data = pd.read_csv("../0.data/car.data")

# print(data.head())

# preprocessing the data using label encoder

le = preprocessing.LabelEncoder()
buying = le.fit_transform(list(data["buying"]))
maint = le.fit_transform(list(data["maint"]))
door = le.fit_transform(list(data["door"]))
persons = le.fit_transform(list(data["persons"]))
lug_boot = le.fit_transform(list(data["lug_boot"]))
safety = le.fit_transform(list(data["safety"]))
cls = le.fit_transform(list(data["class"]))

# encoded the data

predict = "class"
X= list(zip(buying, maint, door, persons, lug_boot, safety))
y= list(cls)

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.1)

# print(x_train, y_test)
# Look into calculating the n_neighbours for knn technique

model = KNeighborsClassifier(n_neighbors=9)
model.fit(x_train, y_train)
acc = model.score(x_test, y_test)

print("Model Accuracy: ", acc)
predicted = model.predict(x_test)

names = ["unacc", "acc", "good", "vgood"]
for x in range(len(x_test)):
    print("Predicted: ", names[predicted[x]], "Data: ", x_test[x], "Actual: ", names[y_test[x]])
    n = model.kneighbors([x_test[x]], 9, True)
    print("N: ", n)