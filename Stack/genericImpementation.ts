/**
 * Stacks
 *
 * functions: push, pop, peek, length
 */
export function start_generic() {
  const letters: string[] = [];

  var word = "racecar";
  var rword = "";

  for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  rword === word
    ? console.log(`${word} is a Palindrome`)
    : console.log(`${word} is Not a palindrome`);
}