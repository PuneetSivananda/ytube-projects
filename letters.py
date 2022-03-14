from collections import Counter


def count_letters(filename):
    letter_counter = Counter()
    with open(filename) as file:
        for line in file:
            line_letters = [char for char in line.lower() if char.isalpha()]
            letter_counter.update(Counter(line_letters))
        return letter_counter


