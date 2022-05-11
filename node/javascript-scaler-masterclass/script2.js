//hoisting
// var n = 10;
// function cubeNum(num) {
//   var result = num * num * num;
//   return result;
// }

// var c1 = cubeNum(n);
// var c2 = cubeNum(5);
// console.log(c1);
// console.log(c2);

//Hoisting on vars
//let, const and var are hosited, let and const are in seperate mem space
// the dont go to global execution context
// var is present in a global context
let a = 10;
var b = 10;
const c = 10;
console.log("awesome");

// declaring functions in js arrow functions

const getName = () => {
  console.log("Hello world");
};
console.log(getName);
getName();

//delay of running the function
//Runs settimout in a seperate call stack before adding to the task queue // CALLBACK  QUEUE
setTimeout(() => {
  console.log("ASYNC");
}, 5000);
//this code is adde to the task queue before the async code first // CALL STACK
console.log("SYNC");
