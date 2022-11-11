import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split

data = pd.read_csv("../data/student-mat.csv", sep=";")
data = data[["G1", "G2", "G3", "studytime", "failures", "absences"]]


# label the output we are predicting
predict = "G3"

X = np.array(data.drop([predict], axis=1))
y = np.array(data[predict])

# print(X, y)

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.1)

# Linear Regression 
# - When we have data that have correlation between each other 
# - Predict the Value based on the best fit line
# - Y = mx + C
# - m - slope; m = (y2-y1)/(x2-x1) ;arithmetics
# - C - Y-Intercept; 

linear = linear_model.LinearRegression()

linear.fit(x_train, y_train)
acc = linear.score(x_test, y_test)
print(acc)