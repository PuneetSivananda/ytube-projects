word = "missippi"
counter = {}
for letter in word:
    if letter not in counter:
        counter[letter] = 0
    counter[letter] += 1

print(counter)

word_counter = {}
for letter in word:
    # 0 as the default value if the key is not found
    word_counter[letter] = word_counter.get(letter, 0)+1

print(word_counter)
