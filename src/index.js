import { DataFrame } from "data-forge";


const df = new DataFrame(
    [{ A: 10 }, { A: 20 }, { A: 30 }, { A: 40 }]
)
// console.log(df.toJSON())


const df1 = new DataFrame({
    columnNames: ["id", "names", "sex", "age"],
    rows: [
        [1, "Jesse", "F", 25],
        [2, "Jane", "F", 35],
        [3, "Sighn", "M", 26],
        [4, "Ali", "M", 27],
        [5, "Mary", "F", 15],
    ],
})

console.log(df1)

// as an array
console.log(df1.toArray())
console.log(df1.toRows())
console.log(df1.toPairs())
console.log(df1.toJSON())
