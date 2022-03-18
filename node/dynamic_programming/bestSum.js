/**
 * bestSum(targetSum, numbers)
 * The function should return shortest combination of elements that add up exactly to the targetSum
 * 
 * Brute force:
 * Time Complexity  = O(n^m * m) time 
 * Space Complexity = O(m^2) space
 * 
 * Efficient:
 * Time Complexity  = O(m^2*n) time 
 * Space Complexity = O(m^2) space
 */

const bestSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null

    for (let num of numbers) {
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers, memo)
        if (remainderCombination !== null) {
            const combination = [...remainderCombination, num]
            //Take the shortest combination
            //if the combination is shorter than shortestCombination
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }
    memo[targetSum] = shortestCombination
    return shortestCombination
}


console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(8, [2, 3, 5]))
console.log(bestSum(8, [1, 4, 5]))
console.log(bestSum(100, [1, 2, 5, 25]))
