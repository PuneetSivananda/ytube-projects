#!/usr/bin/env python3
from collections import Counter

# Fruit sold per day
sales_day1 = Counter(apple=4, orange=9, banana=4)
sales_day2 = Counter(apple=10, orange=8, banana=6)

# Total sales
tot_sales = sales_day1 + sales_day2
print(tot_sales)

# Sales increment
sales_increment = sales_day2 - sales_day1
print(sales_increment)

# Minimum sales
min_sales = sales_day1 & sales_day2
print(min_sales)


# Maximum sales
sales_day1 | sales_day2
