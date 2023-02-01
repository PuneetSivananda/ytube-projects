import numpy as np
from matplotlib import pyplot as plt

# Matrix
A = np.array([
    [0.5, 0.5,0.25],
    [0.25, 0, 0.25],
    [0.25, 0.5, 0.5]
])
print(A)

xtoday = np.array([[1], [0], [0]])
print(xtoday)

print(A @ xtoday)

for k in range()