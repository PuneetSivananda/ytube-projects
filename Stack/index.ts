// import { start_generic } from "./genericImpementation";
// start_generic();

import { Stack } from "./functionalImplementation";

var myStack = new (Stack as any)();
myStack.push(1);
myStack.push(3);
myStack.push(5);

console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
