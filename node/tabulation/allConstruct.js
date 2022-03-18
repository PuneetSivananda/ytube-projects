const allConstruct = (target, wordBank)=>{
    const table =Array(target.length +1).fill(0);
    return table[target.length]
}

console.log(allConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']))
console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
console.log(allConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'bar']))
console.log(allConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee'
]))
