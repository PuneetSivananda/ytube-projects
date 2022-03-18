/**
 * allConstruct(target, wordBank)
 * The function should return if the array of string can create `target`
 *  by concantenating elements of the `wordBank` array
 *
 * Memoization:
 * Time Complexity  = O(n^m) time
 * Space Complexity = O(m) space
 *
 * */

const allConstruct = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target]
    if (target === "") return [[]]

    const result = []
    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const suffixWays = allConstruct(suffix, wordBank, memo)
            const targetWays = suffixWays.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }
    memo[target] = result
    return result
}

console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'bar']))
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee'
]))
