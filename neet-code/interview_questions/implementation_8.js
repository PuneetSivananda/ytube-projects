const flattenArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];

console.log(flattenArray);

// simple method
console.log([].concat.apply([], flattenArray));

// spread operator
console.log([].concat(...flattenArray));
