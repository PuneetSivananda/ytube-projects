# using an hashmap of the input array, check if the value exists

class Solution:
    def twoSum(self, nums, target):
        hashMap = {}
        for i, n in enumerate(nums):
            diff = target - n
            if diff in hashMap:
                return [hashMap[diff], i]
            hashMap[n] = i
        return


soln = Solution()
print(soln.twoSum([1, 2, 4, 5, 6], 7))
