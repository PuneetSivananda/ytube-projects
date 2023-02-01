import numpy as np
from matplotlib import pyplot as plt

# Matrix
A = np.array([
    [0.5, 0.5,0.25],
    [0.25, 0, 0.25],
    [0.25, 0.5, 0.5]
])


xtoday = [1,0,0]

# @ column multiplication

print(A @ xtoday)
the_weather = np.zeros((50,3))
the_weather[0,:] = xtoday
for k in range(50):
    xtomorrow = A @ xtoday
    xtoday = xtomorrow
    the_weather[k,:] = xtomorrow
    print(k)
    print(xtomorrow)
    

print(the_weather)

plt.plot(the_weather)
plt.grid(True)
plt.show()