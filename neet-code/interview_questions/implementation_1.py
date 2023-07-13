# Reference: https://stackoverflow.com/questions/522563/accessing-the-index-in-for-loops


# def catchNumberFormat(num: int):
#     try:
#         sampleNum = 2.45/0
#         print("continues flow")
#     except ZeroDivisionError as e :
#         print(e)


# catchNumberFormat(4)

# numbersArray = [1,0, 1, 1 ,1 ,1 ,0, 1, 0]
# print(sorted(numbersArray))

# def swap(a,b):
#     return b, a

# def bubble_sort_array(numbersArray):
#     for i in numbersArray:
#         for j in numbersArray:
#             if(numbersArray[i] < numbersArray[j]):
#                 swap(i, j)


# print(bubble_sort_array(numbersArray))

numbersArray = [1, 2, 3, 6, 5, 4, 10]
# numbersArray = [1, 10, 3, 6, 5, 4, 10]

# interview solun


def findThreeConsecutive(arrayNums):
    for i in numbersArray:
        for j in numbersArray:
            for k in numbersArray:
                if (i < j < k):
                    return True
    return False

# print(findThreeConsecutive(numbersArray))


def findThreeConsecutive1(arrayNums):
    # if the difference between the first and second num, and second and third num are 1 and 2 respectively
    # then return True, for any of pairs found in the entire array
    for val in range(len(arrayNums)-2):  # why -2 ??
        if (arrayNums[val + 1] == arrayNums[val] + 1 and arrayNums[val + 2] == arrayNums[val] + 2):
            return True
    return False


print(findThreeConsecutive1(numbersArray))


numbers = [3, 5, 3, 7, 5]

# solution 1
print(list(set(numbers)))

# solution 2
for i in range(len(numbers)):
    is_unique = True
    for j in range(len(numbers)):
        if i != j and numbers[i] == numbers[j]:
            is_unique = False
            break
    if is_unique:
        print(numbers[i])

numbers = [3, 5, 3, 7, 5]
print(">>")

# List Comprehension
result = [numbers[i:i+3] for i in range(0, len(numbers), 3)]
print(result)

# Using For loops
main = []
for i in range(0, len(numbers), 3):
    main.append(numbers[i:i+3])
print(main)
