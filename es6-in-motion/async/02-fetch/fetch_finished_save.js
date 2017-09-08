const museumsDatasetUrl = "../../datasets/museums.json";

let museumList = {};

fetch(museumsDatasetUrl)
  .then((response) => response.json())
  .then((museums) => museumList = Object.assign(museumList, museums))
  //.then((museums) => console.log(museums))
  //.then(undefined, error => console.log("undefined: oh no!", error))
  .catch(error => console.log("error tripped!!\n", error));
  //.catch(function (e) {
  //  console.log("catch at bpttp,", error);
  //  return [1, 2, 3];
  //});

//console.log(museumList);

setTimeout(function(){
  console.log("after timeout of 3 seconds...here comes the museum list again...");
  
  //check that the data is what you expect
  //one way is to use decomposition
  // first check to see if there is any data at all
  if (typeof museumList != "undefined") {
    console.log("GOT THERE");
  }
  
  for (let museum in museumList) {
    keyName = parseInt(museum);
    keyName++;
    console.log(keyName);
    //console.log("Name: " + museumList[museum]["name"]["__cdata"]);
    //console.log("Addr: " + museumList[museum]["address"]["__cdata"]);
    
    //const { name: { __cdata: thisMuseumName } } = museumList[museum];
  
    //const { name: { __cdata: museumName } } = museumList[museum];
    //const { phone: { __cdata: museumPhone } } = museumList[museum];
    //const { address: { __cdata: museumAddress } } = museumList[museum];
    //const { closing: { __cdata: museumClosing } } = museumList[museum];
    //const { rates: { __cdata: museumRates } } = museumList[museum];
    //const { specials: { __cdata: museumSpecials } } = museumList[museum];
    //blows this all up! - better use for/in below
    //onst { hamburgers: { __cdata: museumHamburgers } } = museumList[museum];
    //console.log(" howdy " + museumName);
    
    for (let key in museumList[museum]) {
      console.log(key.toUpperCase() + ": " + museumList[museum][key]["__cdata"]);
      //console.log((key !== "name" ? "" : "\n" + museum + "\nMUSEUM ") + key.toUpperCase() + ": " + museumList[museum][key]["__cdata"]);
    }
  }
}, 3000);

const person = { first: "Orp", last: "McFiggy", address: { lines: ["800 Cheery Tree Lane", "Apt 24"], city: "NY", state: "NY" } };

// note this does not start at the top of the object hierarchy
const { address: { lines: [ ,ln1 ], state: st } } = person;
console.log(ln1, st);
// not that this does start at the top of the object hierarchy
const { first: fname, last: lname, address: { lines: [ ,line2 ], state: state } } = person;
console.log(fname, lname, line2, state);
