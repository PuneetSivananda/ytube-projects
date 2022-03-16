from collections import Counter
import numpy as np
import matplotlib.pyplot as plt

sales = Counter(banana=15, apple=39, orange=30, tomato=4).most_common()
x,y = zip(*sales)
print(np.array(x),np.array(y))

w = 0.8
x_labels, y_axis = np.array(x), np.array(y)
nitems = len(y_axis)
x_axis = np.arange(0, nitems*w, w)    # set up a array of x-coordinates

fig, ax = plt.subplots(1)
ax.bar(x_axis, y_axis, width=w, align='center')
ax.set_xticks(x_axis);
ax.set_xticklabels(x_labels, rotation=90);
plt.show()