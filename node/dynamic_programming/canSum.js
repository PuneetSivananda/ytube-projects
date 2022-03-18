/**
 * canSum(targetSum, numbers)
 * The function should return boolen indicating whether or not
 * it is possible to generate the sum using the numbers given 
 * 
 * Time Complexity  = O(m*n) time 
 * Space Complexity = O(m) space
 */

const canSum = (targetSum, numbers, memo={})=>{
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true;
    if(targetSum < 0) return false;

    for(let num of numbers){
        const remainder = targetSum -num
        if (canSum(remainder, numbers, memo) === true){
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}

console.log(canSum(7,[2,3]))
console.log(canSum(7,[5,3,4,7]))
console.log(canSum(7,[2,4]))
console.log(canSum(8,[2,3,5]))
console.log(canSum(300,[7,14]))
