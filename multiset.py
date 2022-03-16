#!/usr/bin/env python3
from collections import Counter

multiset = Counter([1, 2, 2, 3, 3, 3, 4, 4])

print(multiset)
print(multiset.keys())
print(multiset.keys() == {1, 2, 3, 4})
