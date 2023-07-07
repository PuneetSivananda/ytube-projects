# check if 2 strings are anagrams of each other.
# TODO: Group Anagrams 

# Craete a Hashmap that stores each string, key: char, value: count
# Now compare the 2 Hashmaps of the 2 Strings

# method:
    # check the length of 2 string if same process
    # else
    #  return strings do not match
    # convert string1 and string2 to hashmaps
    # compare the same keys are present in both the hashmaps
    # for each k,v in string1 hashmap compare the values of 2nd hashmap

class Solution:
    def isAnagram(self, s, t):
        # method 2 to sort the string and compare
        # return sorted(s) == sorted(t)
    
        if(len(s)!=len(t)):
            return False
        countS, countT = {},{}
        for i in range(len(s)):
            countS[s[i]] = 1+countS.get(s[i], 0)# counting the occurences of each char
            countT[t[i]] = 1+countT.get(t[i], 0)
        for c in countS:
            if countS[c] != countT.get(c,0):
                return False
            
        return True
    
soln = Solution()
print(soln.isAnagram("nagaram", "anagram"))