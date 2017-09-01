// today:
// let day = new Date();
// add a day:
// day.setDate(day.getDate() + 1);

function* daysForward(days) {
  for (let count = 0; count < days; count++){
    let day = new Date();
    day.setDate(day.getDate() + count);
    yield day;
  }
}

const generatorObject = daysForward(12);

console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

const [...restOfTheStory] = generatorObject;
console.log(restOfTheStory);
