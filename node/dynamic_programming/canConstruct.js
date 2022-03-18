/**
 * canConstruct(target, wordBank)
 * The function should return boolen whether or not `target` can be constructed
 *  by concantenating elements of the `wordBank` array
 *
 * Brute force:
 * Time Complexity  = O(n^m * m) time
 * Space Complexity = O(m^2) space
 *
 * Efficient:
 * Time Complexity  = O(n*m^2) time
 * Space Complexity = O(m^2) space
 */

const canConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === "") return true

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo)) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(canConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'bar']))
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee'
]))
