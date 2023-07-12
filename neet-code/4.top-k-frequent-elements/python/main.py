from typing import List


class Solution:
    def top_k_frequent_elements(self, nums: List[int], k: int) -> List[int]:
        count = {}
        freq = [[] for i in range(len(nums)+1)]
        print(freq)
        for n in nums:
            count[n] = 1 + count.get(n, 0)
        for n, c in count.items():
            freq[c].append(n)
        res = []
        for i in range(len(freq) - 1, 0, -1):  # go in desencding order
            for n in freq[i]:
                res.append(n)
                if (len(res) == k):
                    return res


soln = Solution()
print(soln.top_k_frequent_elements([1, 1, 1, 2, 2, 4, 4, 4, 3], 2))
