import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as pyplot
from matplotlib import style
import pickle


data = pd.read_csv("../0.data/student-mat.csv", sep=";")
data = data[["G1", "G2", "G3", "studytime", "failures", "absences"]]


# label the output we are predicting
predict = "G3"

X = np.array(data.drop([predict], axis=1))
y = np.array(data[predict])

# Linear Regression 
# - When we have data that have correlation between each other 
# - Predict the Value based on the best fit line
# - Y = mx + C
# - m - slope; m = (y2-y1)/(x2-x1) ;arithmetics
# - C - Y-Intercept; 
x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.1)

# Start Training and save the model to pickle file
"""
best = 0
for _ in range(30):  
    linear = linear_model.LinearRegression()
    linear.fit(x_train, y_train)
    x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.1)
    # Coefficients and get accuracy
    acc = linear.score(x_test, y_test)
    # print("Coef: ", linear.coef_)
    # print("Intercept: ", linear.intercept_)

    if acc > best:
        print("Accuracy: ", acc)
        best = acc
        # Pickling the model
        with open("student_model.pickle", "wb") as f:
            pickle.dump(linear, f)
"""            
# End Training and save the model to pickle file


pickle_in = open("student_model.pickle", "rb")
linear_model = pickle.load(pickle_in)
print("Coef: ", linear_model.coef_)
print("Intercept: ", linear_model.intercept_)

# Use the model
predictions = linear_model.predict(x_test)

for pred in range(len(predictions)):
    print("Predictions-> ", predictions[pred], "x_test-> ",  x_test[pred], "y_test-> ",y_test[pred])

p="absences"
style.use("ggplot")
pyplot.scatter(data[p], data["G3"])
pyplot.xlabel(p)
pyplot.ylabel("Final Grade")
pyplot.show()