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

// get a descriptive summary
console.log(df.summarize())

// get columns
console.log(df.getColumnNames())

// rename column names
let df2 = df.renameSeries({ "variety": "class" })
console.log(df2.getColumnNames())

// selection of rows
console.log(df.at(10)) //replacement for iloc

// multiple rows
console.log(df.between(10, 20).toString()) //replacement for iloc

// skip and take
console.log(df.skip(10).take(20).toString())

// selection of columns
// Method:1 getSeries
console.log(df.between(10, 20).getSeries('variety').toString())

// Method:2 deflate
let colSpecies = df.between(10, 20).deflate(row => row.variety)
console.log(colSpecies.toString())