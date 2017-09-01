function * PersonQuery(personifications) {
  //const wes = {first: "Wes", last: "Higbee"};
  //const pax = {first: "Pax", last: "Higbee"};
  //const jonathan = {first: "Jonathan", last: "Higbee"};
  
  //const persons = [wes, pax, jonathan];
  
  for (const personhood of personifications){
    yield personhood;
  }
}

console.clear();

const wes = {first: "Wes", last: "Higbee"};
const pax = {first: "Pax", last: "Higbee"};
const jonathan = {first: "Jonathan", last: "Higbee"};

const personalities = [wes, pax, jonathan];


// Manual iteration
const query = PersonQuery(personalities)[Symbol.iterator]();
console.log(query.next().value);
console.log(query.next().value);
console.log(query.next());
console.log(query.next());

// Manual iteration again
const query1 = PersonQuery(personalities)[Symbol.iterator]();
console.log(query1.next().value);
const [...theRest] = query1;
console.log(query1.next());
console.log(theRest);

// The for-of loop works with iterables.
//for (const record of PersonQuery()) {
//  console.log(record);
//}

// The for-of loop works with iterables.
for (const record of PersonQuery(personalities)) {
  console.log(record);
}

var values = [0, '18', 3, 2, 5, 7, '33', 4, 8, 1];
console.log(values);
values.sort((v1, v2) => v1 - v2);
console.log(values);
values.forEach(value => console.log(value));

var values3 = [0, '18', 3, 2, 5, 7, '33', 4, 8, 1];
console.log(values3);
values3.sort();
console.log(values3);
values3.forEach(value => console.log(value));

function* idGenerator(id){
  while (true) {yield id++}
}

const getId = idGenerator(4);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next().value);
console.log(getId.next());