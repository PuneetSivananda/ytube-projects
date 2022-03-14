from collections import Counter


def print_ascii_bar_chart(data, symbol="#"):
    counter = Counter(data).most_common()
    chart = {category: symbol * frequency for category, frequency in counter}
    max_len = max(len(category) for category in chart)
    for category, frequency in chart.items():
        padding = (max_len - len(category)) * " "
        print("{0}{1} | {2}".format(category, padding, frequency))


letters = "mississippimississippimississippimississippi"

print_ascii_bar_chart(letters)
