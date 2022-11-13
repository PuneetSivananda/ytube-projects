import sklearn
from sklearn import datasets, metrics
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split

cancer = datasets.load_breast_cancer()

# print(cancer.feature_names)
# print(cancer.target_names)

X = cancer.data
y = cancer.target
classes = ['malignant', 'benign'] 

x_train, x_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# print(x_train, y_train)
# SVM classification 
clf = SVC(
    kernel="linear",
    C=2
    # kernel="poly",
    # degree=2
)
clf.fit(x_train, y_train)

y_pred = clf.predict(x_test)
acc = metrics.accuracy_score(y_test, y_pred)
print(acc)

