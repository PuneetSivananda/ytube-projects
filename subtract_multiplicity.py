#!/usr/bin/env python3
from collections import Counter

inventory = Counter(apple=39, orange=30, banana=15)

# Use a counter
wastage = Counter(apple=6, orange=5, banana=8)
inventory.subtract(wastage)
print(inventory)


# Use a mapping of counts
order_1 = {"apple": 12, "orange": 12}
inventory.subtract(order_1)
print(inventory)


# Use an iterable
order_2 = ["apple", "apple", "apple", "apple", "banana", "banana"]
inventory.subtract(order_2)
print(inventory)
