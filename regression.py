import pandas as pd
import numpy as np
import sklearn
from sklearn import linear_model
from sklearn.utils import shuffle
from sklearn.model_selection import train_test_split

data = pd.read_csv("data/student-mat.csv", sep=";")
data = data[["G1", "G2", "G3", "studytime", "failures", "absences"]]

print(data.head())


# label the output we are predicting
predict = "G3"

X = np.array(data.drop([predict], axis=1))
y = np.array(data[predict])

# print(X, y)

x_train, y_train, x_test, y_test = train_test_split(X, y, test_size=0.1)
print(x_train, y_train, x_test, y_test)