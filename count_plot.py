from collections import Counter
import matplotlib.pyplot as plt

sales = Counter(banana=15, apple=39, orange=30, tomato=4).most_common()
x,y = zip(*sales)

w = len(y)
# y = [str(item) for item in y]
# x, y = x, tuple(y)

# plt.bar(x,y)
# plt.show()


# y_axis = np.array([ 79,  14,  12,   9, 196,  27,  66,  12,   7,  32,   7,  18,  26,
#         45,  31,  95,  16,  51,  28, 105,  67])

# x_labels = np.array(['administrator', 'retired', 'lawyer', 'none', 'student',
#        'technician', 'programmer', 'salesman', 'homemaker', 'executive',
#        'doctor', 'entertainment', 'marketing', 'writer', 'scientist',
#        'educator', 'healthcare', 'librarian', 'artist', 'other', 'engineer'], 
#       dtype='|S13')

# w = 3
# nitems = len(y_axis)
# x_axis = np.arange(0, nitems*w, w)    # set up a array of x-coordinates

# fig, ax = plt.subplots(1)
# ax.bar(x_axis, y_axis, width=w, align='center')
# ax.set_xticks(x_axis);
# ax.set_xticklabels(x_labels, rotation=90);
# plt.show()