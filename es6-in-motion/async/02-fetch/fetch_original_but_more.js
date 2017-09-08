const museumsDatasetUrl = "../../atasets/museums.json";

let museumList = {};

fetch(museumsDatasetUrl)
  .then(response => response.json())
  .catch(function (e) {
    console.log("tripped\n" + e);
    return [1, 2, 3];
  })
  .then(museums => console.log(museums));
