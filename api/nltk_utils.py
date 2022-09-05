import nltk
from nltk.stem.porter import PorterStemmer

stemmer = PorterStemmer()

def tokenize(sentence):
    return nltk.word_tokenize(sentence)

def stem(word):
    return stemmer.stem(word.lower())

def bag_of_words(tokenized_sentence, all_words):
    pass


# s = ['How', 'long', 'does', 'shipping', 'take', '?']
# print(['How', 'long', 'does', 'shipping', 'take', '?'])
# print([stem(word) for word in s])

