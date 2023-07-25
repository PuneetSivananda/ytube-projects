let statement = "The quick brown fox jumps over the lazy dog";

let vowels = ['a','e','i','o','u']

// {a: 2, e: 2, i:  1, o: 2, u: 4}
// you should use reduce method of Arrays

const vowels1 = {}

const newArr = statement.split('')


newArr.map(letter =>{
    if(vowels1[letter] == undefined && !vowels1[letter]){
        vowels1[letter]=1
    }
    if(vowels1[letter]){
        vowels1[letter]+=1
    }
})


console.log(
    {
    'a':vowels1['a'],
    'e':vowels1['e'],
    'i':vowels1['i'],
    'o':vowels1['o'],
    'u':vowels1['u']
    })


// 
// react counter should go from 10 to 0 and then back to 10
// keep decrementing and incrementing
// 
