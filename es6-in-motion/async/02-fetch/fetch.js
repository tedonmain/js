const museumsDatasetUrl = "../../datasets/museums.json";

let museumList = {};

fetch(museumsDatasetUrl)
  .then(function (response) {
    console.log("here comes throw whatever...");
    throw "whatever";
    console.log("after throw whatever and before return response.json()...");
    return response.json();
    console.log("after return response.json()...");
  })
  //.then(response => response.json())
  .catch(function (e) {
    console.log("tripped\n" + e);
    return [1, 2, 3];
  })
  .then(museums => console.log(museums));

fetch(museumsDatasetUrl)
  .then((response) => response.json())
  //.then((museumss) => console.log("museumss:" + museumss))
  //.then(function (response) {
   // throw "throw with nothhg after it...";
    //return response.json();
  //})
  //.catch(function (e) {
  //  console.log("nothing tripped\n" + e);
  //  //return [4, 5, 6];
  //})
  .then((museums2) => {
    return console.log("xhr:", museums2);
    //return console.log("xhr:", museums2[0]);
  });
