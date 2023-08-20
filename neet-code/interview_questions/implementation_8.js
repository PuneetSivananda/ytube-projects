const flattenArray = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8, 9],
  [10, 11, 12, 13, 14, 15],
  [2, [3, 5, [8]]],
];

console.log(flattenArray);

// simple method
console.log([].concat.apply([], flattenArray));

// spread operator
console.log([].concat(...flattenArray));

const flatten = (flattenArray) => {
  let flatArray = [];
  for (let index = 0; index < flattenArray.length; index++) {
    const ele = flattenArray[index];
    if (Array.isArray(ele)) {
      flatArray.push(...flatten(ele));
    } else {
      flatArray.push(ele);
    }
  }
  return flatArray;
};

const nestedArray = [
  [1],
  [
    [1, 4, [5, 3]],
    [1, 2, 3, [3, 4, [2, [22, [3, 4, 5, 6, 5, [2]]]]], 4],
  ],
];
const result = flatten(nestedArray);
console.log(result);
