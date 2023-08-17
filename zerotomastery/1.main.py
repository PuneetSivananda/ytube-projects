# return the indices
# input: positive integers, unique
def addUptoTarget(inputArr, target):
    for i in range(len(inputArr)):
        for j in range(len(inputArr)):
            if (i != j) and (inputArr[i]+inputArr[j] == target):
                return True
    return False


print(addUptoTarget([1, 3, 7, 9, 2], 11))
