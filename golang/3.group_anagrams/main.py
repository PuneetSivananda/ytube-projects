from collections import defaultdict

def groupAnangrams(strs):
    res = defaultdict(list)
    for s in strs:
        count = [0]*26
        for c in s:
            count[ord(c)-ord("a")]+=1

        res[tuple(count)].append(s)
    return res.values()

print(groupAnangrams(["eat","tea","tan","ate","nat","bat"]))