function findLongestWordLength(str) {
  MAX = 0;
  str.split(" ").forEach((item) => {
    if(item.length > MAX) MAX = item.length
  });
  return MAX;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
