const allConstruct = (target, wordBank)=>{
    const table = Array(target.length + 1)
        .fill()
        .map(()=>[]);

    table[0] = [[]]
    for(let i=0;i<=target.length;i++){
        for(let word in wordBank){
            if(target.slice(i, i+word.length) === word){
                const newCombinations = table[i].map(subArray => [...subArray, word])
                table[i+word.length].push(...newCombinations)
                console.log(table)
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// console.log(allConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']))
// console.log(allConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'bar']))
// console.log(allConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']))
// console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
//     'e',
//     'ee',
//     'eee',
//     'eeee',
//     'eeeee'
// ]))
