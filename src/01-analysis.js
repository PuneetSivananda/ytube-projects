import * as dataForge from "data-forge";
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

// selection of multiple columns
console.log(df.between(10, 20).subset(['sepal.length', 'variety']).toString())

// Delelte columns
console.log(df.take(5).toString())
console.log(df.dropSeries('sepal.length').head(5).toString())

// Delete Multiple columns
console.log(df.take(5).toString())
console.log(df.dropSeries(['sepal.length', 'variety']).head(5).toString())


// filtering columns  
console.log(df.where(row => row['sepal.width'] > 1.3).toString())

// modify or transform a column

console.log(
    df.transformSeries({
        variety: value => value.toUpperCase()
    }).toString()
)

// Distinct values

console.log(
    df.distinct(row => row['variety']).toString()
)

// Methods
console.log(dataForge)

// Things to do with Series
let sepal_length = df.getSeries("sepal.length")
console.log(sepal_length.select(value => value * .1).toString())