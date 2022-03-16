from collections import Counter


def mode(data):
    counter = Counter(data)
    _, top = counter.most_common(1)[0]
    return [point for point, count in counter.items() if count == top]


if __name__ == "__main__":
    print(mode([2, 1, 2, 2, 3, 5, 3]))
    print(mode([
     "apple",
     "orange",
     "apple",
     "apple",
     "orange",
     "banana",
     "banana",
     "banana",
     "apple",
 ]))