function reverseString(str) {
  let reversedString = "";
  for (let i = str.length; i > 0; i--) {
    reversedString += str[i - 1];
  }
  return reversedString;
}

console.log(reverseString("hello"));
