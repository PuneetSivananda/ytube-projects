# Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

# For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

# Bonus: Can you do this in one pass?

def findSum(arr, k):
    for _, i in enumerate(arr):
        for _, j in enumerate(arr):
            if (i == j):
                continue
            if (i+j == k):
                return True
    return False


print(findSum([10, 15, 3, 7], 18))
