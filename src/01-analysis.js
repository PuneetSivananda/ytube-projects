import { readFileSync } from "data-forge-fs";

const df = readFileSync('data/iris.csv').parseCSV()
console.log(df)