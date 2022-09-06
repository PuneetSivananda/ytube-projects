import json
from nltk_utils import tokenize, stem, bag_of_words
import numpy as np

import torch
import torch.nn as nn
from torch.utils.data import Dataset, DataLoader

from models import NeuralNet

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


class ChatDataset(Dataset):
    def __init__(self):
        self.n_samples = len(X_train)
        self.x_data = X_train
        self.y_data = y_train

    def __getitem__(self, idx):
        return self.x_data[idx], self.y_data[idx]
    
    def __len__(self):
        return self.n_samples


# Hyper parameters
batch_size = 8
hidden_size = 8
output_size = len(tags)
input_size = len(X_train[0])


dataset = ChatDataset()
train_loader = DataLoader(dataset=dataset, batch_size=batch_size, shuffle=True, num_workers=2)

# check for gpu support
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
model = NeuralNet(input_size, hidden_size, output_size).to(device)

# loss and optimizer