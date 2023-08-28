text = open("content.txt", "r").readlines()
chars = sorted(list(set(text)))
stoi = {ch: i for i, ch in enumerate(chars)}
itos = {i: ch for i, ch in enumerate(chars)}

encode = lambda s:[stoi[c] for c in s] # encoder
decode = lambda l:''.join([itos[i] for i in l]) #decoder


print(encode("Hello World"))
print(decode(encode("Hello World")))