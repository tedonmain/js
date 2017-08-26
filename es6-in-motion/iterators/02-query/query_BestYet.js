function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};
  
  const persons = [wes, pax, jonathan].map(person => person.first + " " + person.last);
  
  var recCount = 0;
  var recTotal = persons.length;
  
  this.createIterator = function () {
    function next() {
      if (recCount < recTotal) {
        let person = persons[recCount];
        recCount += 1;
        return { value: person, done: false };
      }
      return { done: true };
    }
    return {next};
  };
}

const query = new PersonQuery().createIterator();
console.log(query.next());
console.log(query.next());
console.log(query.next());
console.log(query.next());



