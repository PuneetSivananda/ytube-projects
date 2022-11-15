import tensorflow as tf
from tensorflow import keras
import numpy as np


data = keras.datasets.imdb

(train_images, train_labels),(test_images, test_labels) = data.load_data()
