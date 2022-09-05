import json
from nltk_utils import tokenize, stem, bag_of_words
import numpy as np

with open("intents.json", "r") as f:
    intents = json.load(f)


all_words = []
tags = []
xy = []

for intent in intents["intents"]:
    tag = intent["tag"]
    tags.append(tag)
    for pattern in intent["patterns"]:
        w = tokenize(pattern)
        all_words.extend(w)
        xy.append((w, tag))

ignore_words = [
    "?",
    "!",
    ".",
    ","
]

# stemming
all_words = [stem(w) for w in all_words if w not in ignore_words]
# sorting words and unique words
all_words = sorted(set(all_words))
tags = sorted(set(tags))

X_train = []
y_train = []

for (patter_sentence, tag) in xy:
    bag = bag_of_words(patter_sentence, all_words)
    X_train.append(bag)

    label = tags.index(tag)
    y_train.append(label) #1-hot encoded vector needed i.e CrossEntropy Loss

X_train = np.array(X_train)
y_train = np.array(y_train)
