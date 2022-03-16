#!/usr/bin/env python3
from collections import Counter

prices = {
    "course": 97.99,
    "book": 54.99,
    "wallpaper": 4.99
}

cart = Counter(course=1, book=3, wallpaper=2)

for product, units in cart.items():
    subtotal = units * prices[product]
    price = prices[product]
    print(f"{product:10}: ${price:7.2f} x {units} = {subtotal:7.2f}")
