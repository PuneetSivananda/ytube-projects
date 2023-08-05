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
