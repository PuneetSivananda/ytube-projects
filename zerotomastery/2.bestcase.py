
def bestCaseSolution(inputArr, target):
    numsMap = {}
    for ix, item in enumerate(inputArr):
        currMapVal = numsMap.get(item)
        if (currMapVal >= 0):
            return [currMapVal, ix]
        else:
            numToFind = target - inputArr[ix]
            numsMap[numToFind] = ix
    return [-1, -1]


print(bestCaseSolution([1, 3, 7, 9, 2], 11))
