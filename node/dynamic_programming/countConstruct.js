/**
 * countConstruct(target, wordBank)
 * The function should return no of ways `target` can be constructed
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

const countConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === "") return 1

    let total = 0
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWays = (countConstruct(target.slice(word.length), wordBank, memo))
            total += numWays
        }
    }
    memo[target] = total
    return total
}

console.log(countConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(countConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'bar']))
console.log(countConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee'
]))
