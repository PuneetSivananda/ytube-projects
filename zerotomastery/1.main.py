# return the indices
# input: positive integers, unique
def addUptoTarget(inputArr, target):
    for ix, i in enumerate(inputArr):
        for iy, j in enumerate(inputArr):
            if (ix != iy) and (i+j == target):
                return True
    return False


print(addUptoTarget([1, 3, 7, 9, 2], 11))
