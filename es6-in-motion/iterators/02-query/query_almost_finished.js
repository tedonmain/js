function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};
  const orp = {first: "Orp", last: "McFiggy"};
  const roberto = {first: "Roberto", last: "Clemente"};
  
  const persons = [wes, pax, jonathan, orp, roberto].map(person => person.first + " " + person.last);
  
  var recCount = 0;
  var recTotal = persons.length;
  
  function createIterator() {
    const next = () => {
      if (recCount < recTotal) {
        let person = persons[recCount];
        recCount += 1;
        return { value: person, done: false };
      }
      return { done: true };
    };
    return {next};
  }
  
  
  this[Symbol.iterator] = createIterator;
}

/*
const query = new PersonQuery()[Symbol.iterator]();
console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());
*/

for (const record of new PersonQuery()) console.log(record);

const [ firstRecord, secondRecord, ...rest ] = new PersonQuery();
console.log(firstRecord);
console.log(secondRecord);
console.log(rest);

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6, 7];
const combined = [ ...numbers1, ...numbers2];
console.log(combined); //[ 1, 2, 3, 4, 5, 6, 7 ]
console.log(Math.min(...combined));

const combined1 = [ ...numbers1, ...numbers2, ...new PersonQuery()];
console.log(combined1);

const minimum = Math.min(...numbers2);
console.log(minimum);

console.log(Math.max(...numbers1, ...numbers2));
