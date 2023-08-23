function factorialize(num) {
  let resultFact = 1;
  for (let i = num; i > 0; i--) {
    resultFact = resultFact * i;
  }
  return resultFact;
}

console.log(factorialize(5));
