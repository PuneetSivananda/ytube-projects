import numpy as np
from matplotlib import pyplot as plt

# Matrix
A = np.array([
    [0.5, 0.5,0.25],
    [0.25, 0, 0.25],
    [0.25, 0.5, 0.5]
])


xtoday = np.array([[1], [0], [0]])

# @ column multiplication

print(A @ xtoday)
the_weather = np.zeros((3,50))
the_weather[:,0] = xtoday[:,0]
for k in range(50):
    xtomorrow = A @ xtoday
    the_weather[:,k] = xtomorrow[:,0]
    print(k)
    print(xtomorrow)
    xtoday = xtomorrow

print(the_weather)

plt.plot(the_weather.transpose(),)
plt.grid(True)
plt.show()