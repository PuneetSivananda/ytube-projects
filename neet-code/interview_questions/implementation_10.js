const items = [
  { name: "Rice", price: 5 },
  { name: "Book", price: 20 },
  { name: "Chicken", price: 10 },
  { name: "Monitor", price: 50 },
  { name: "Slate", price: 100 },
];

let totalPrice = 0;
items.forEach((item) => {
  totalPrice += item.price;
});

console.log(totalPrice);
