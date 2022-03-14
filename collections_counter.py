from collections import defaultdict
word = "missippi"
counter = defaultdict(int)

for letter in word:
    counter[letter] += 1

print(counter)
