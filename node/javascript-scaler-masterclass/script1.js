if (true) {
  var something = "this is true";
}
console.log(something);

if (true) {
  let somethingElse = "this is something else";
}
console.log(somethingElse); // throws error as block scoped
