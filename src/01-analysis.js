import { readFileSync } from "data-forge-fs";

const df = readFileSync('data/iris.csv').parseCSV()
console.log(df.toString())

// head 
console.log(df.head(5).toString())
// tail
console.log(df.tail(5).toString())

// get datatypes  | describr alternative
console.log(df.detectTypes().toString())

// get values
console.log(df.detectValues().toString())