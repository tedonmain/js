const numbers = [1, 3, 4, 6, 9];
const numbers1 = undefined;
const numbers2 = [1, 3, undefined, 4, 6, 9, 12, NaN, 44, "howdy!", 7444];

function sumInitial(numbers = []) {
  //numbers = numbers || [];
  let sum = 0;
  //for (let index = 0; index < numbers.length; index++) {
    //sum += numbers[index] || 0;
  //  sum += isNaN(numbers[index]) ? 0 :  numbers[index];
  //}
  for (const number of numbers) {
    //sum += number || 0;
    sum += isNaN(number) ? 0 : number;
  }
  return sum;
}

function sum(numbers = []) {
  //numbers = numbers || [];
  let sum = 0;
  //for (let index = 0; index < numbers.length; index++) {
  //sum += numbers[index] || 0;
  //  sum += isNaN(numbers[index]) ? 0 :  numbers[index];
  //}
  //for (const entry of numbers.entries()) {
  //  console.log(entry);
  //for (const [ index, number ] of numbers.entries())
  for (const [ index, number = 0 ] of numbers.entries()) {
    //sum += number || 0;
    //sum += number;
    sum += isNaN(number) ? 0 : number;
  }
  return sum;
}

console.log(sum(numbers));
console.log(sum(numbers1));
console.log(sum(numbers2));

console.log(numbers2); // [1, 3, undefined, 4, 6, 9, 12, NaN, 44, "howdy!", 7444]
const identity1 = numbers2.map((n = 0) => n );
const identity2 = numbers2.map((n => isNaN(n) ? 0 : n));
console.log(identity1); // [ 1, 3, 0, 4, 6, 9, 12, NaN, 44, 'howdy!', 7444 ]
console.log(identity2); // [ 1, 3, 0, 4, 6, 9, 12, 0, 44, 0, 7444 ]
console.log(sum(identity1)); // 7523
console.log(sum(identity2)); // 7523

const prices = [1.10, 2.32, 3.68, 4.90];
const taxRate = 0.07;

const orders = [
  {desc: "Pencils", price: 1.50, quantity: 2},
  {desc: "Notepads", price: 6.00, quantity: 3},
  {desc: "Paperclips", price: 4.30}
];

//const costs = orders.map( o => o.price * o.quantity);
const costs = orders.map(({ price, quantity = 1 }) => price * quantity);
console.log(costs);