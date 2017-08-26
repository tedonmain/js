
const orders = [
  {desc: "Pencils", price: 1.50, quantity: 2},
  {desc: "Notepads", price: 6.00, quantity: 3},
  {desc: "Paperclips", price: 4.30}
];

let sum = 0;
for ( const order of orders) {
  const quantity = order.quantity || 1;
  sum += order.price * quantity;
}
console.log(sum);

sum = 0;
const costs = orders.map(({ price, quantity = 1 }) => price * quantity);
for ( cost of costs ) {
  sum += cost;
}
console.log(sum);

sum = 0;
for ( const { price, quantity = 1 } of orders) {
  sum += price * quantity;
}
console.log(sum);

sum = 0;
for (const property in orders) {
    const price = orders[property].price;
    const quantity = orders[property].quantity || 1;
    sum += price*quantity;
}
console.log(sum);