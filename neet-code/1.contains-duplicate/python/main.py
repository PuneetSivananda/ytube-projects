class Solution:
    def containsDuplicate(self, nums):
        hashset = set()
        for n in nums:
            if n in hashset:
                return True
            hashset.add(n)
        return False
    
soln = Solution()
print(soln.containsDuplicate([2,1,3,2]))