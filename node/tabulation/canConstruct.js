const canConstruct = (target, wordBank)=>{
    const table =Array(target.length +1).fill(false);
    table[0] = true
    for(let i=0;i<=target.length;i++){
         if (table[i] ==true){
             for(let word of wordBank){
                 // if the word matches the characters starting at posiotion i
                 if(target.slice(i, i+word.length)===word){
                    table[i+word.length] = true
                }
             }
         }
    }
    return table[target.length]
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
