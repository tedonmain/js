function PersonQuery() {
  const wes = {first: "Wes", last: "Higbee"};
  const pax = {first: "Pax", last: "Higbee"};
  const jonathan = {first: "Jonathan", last: "Higbee"};
  
  const persons = [ wes, pax, jonathan ].map(person => person.first + " " + person.last);
  
  
  
  var recCount = 0;
  var recTotal = persons.length;
  
  this.nextRecord = function () {
    if (recCount < recTotal) {
      let person = persons[recCount];
      recCount += 1;
      return person;
    }
    return undefined;
  };
  
}



const query = new PersonQuery();
console.log(query.nextRecord());
console.log(query.nextRecord());
console.log(query.nextRecord());
console.log(query.nextRecord());


