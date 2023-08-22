const testArray = [{"key" : "a","value":"1"},{"key" : "b","value":"2"},{"key" : "c","value":"3"},{"key" : "d","value":"4"},{"key" : "e","value":"5"}]
const values =  [1,2,5]
//  Const resultArray = [{"key" : "a","value":"1"},{"key" : "b","value":"2"},{"key" : "e","value":"5"}]
const output = []
testArray.forEach((val)=>{
    values.forEach((v2)=>{
        if(v2 ==val.value){
            // console.log(val)
            output.push(val)
        }
    })
})

console.log(output)