text = open("content.txt", "r").read()
chars = sorted(list(set(text)))
stoi = {ch: i for i, ch in enumerate(chars)}
itos = {i: ch for i, ch in enumerate(chars)}


def encode(s): return [stoi[c] for c in s]  # encoder


def decode(l): return ''.join([itos[i] for i in l])  # decoder


print(encode("Hello World"))
print(decode(encode("Hello World")))
