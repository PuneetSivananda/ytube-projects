/**
 * Stacks
 *
 * functions: push, pop, peek, length
 */

const letters: string[] = [];

var word = "racecar";
var rword = "";

for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

rword === word ? console.log("Palindrome") : console.log("Not a palindrome");
