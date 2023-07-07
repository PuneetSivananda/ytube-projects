class Solution:
    def check_combination_brute_force(self, input_array, target):
        for value in range(len(input_array)):
            for val in range(len(input_array)-1): 
                if(input_array[val]==input_array[value]): 
                    break
                if(input_array[val]+input_array[value] == target):
                    print(input_array[value], input_array[val])
                    return True
        return False
    
soln = Solution()
print(soln.check_combination_brute_force([2, 7, 11, 15], 9))