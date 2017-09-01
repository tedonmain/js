const museumsDatasetUrl = "../../datasets/museums.json";

// Callback based web request:
const request = new XMLHttpRequest();
request.open("GET", museumsDatasetUrl);

request.onload = function () {
  const museums = JSON.parse(this.responseText);
  console.log("xhr", museums);
};

request.onerror = function (error) {
  console.error(error);
};

request.send();

setTimeout(function(){
  console.log("after a timeout of 1 second...");
}, 1000);
