from letters import count_letters

letter_counter = count_letters("pyzen.txt")

for letter, count in letter_counter.items():
    print(letter, "-->", count)

print("XXXXXXXXXXXXXXXXX")
for letter, count in letter_counter.most_common(5):
    print(letter, "-->", count)
