from typing import List
from collections import Counter


class Solution:
    def top_k_frequent_elements(self, nums: List[int], k: int) -> List[int]:
        counter = Counter(nums)
        return [num for num, _ in counter.most_common(k)]


soln = Solution()
print(soln.top_k_frequent_elements([1, 1, 1, 2, 2, 4, 4, 4, 3], 2))
