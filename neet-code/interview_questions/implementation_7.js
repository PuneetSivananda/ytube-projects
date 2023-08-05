console.log(1);

setTimeout(function () {
  console.log(2);
}, 0);

Promise.resolve()
  .then(function () {
    console.log(3);
  })
  .then(function () {
    console.log(4);
  });

new Promise((resolve, reject) => {
  console.log("resolve");
  console.log(33);
  resolve("22");
  console.log("rejected");
  reject("rejected");
});

const sample = {
  numbers: ["one", "two", "three", "four", "five"],
  six: { sample: "1" },
};

console.log(Object.keys(sample));
console.log(Object.values(sample));

for (const v of Object.values(sample)) {
  console.log(v);
}

console.log(Object.entries(sample));
for (const [k, v] of Object.entries(sample)) {
  console.log(k, v);
  // nested
  if (typeof v === "object") {
    for (const [k1, v1] of Object.entries(v)) {
      console.log(k1, v1);
    }
  }
}
