const museumsDatasetUrl = "../../datasets/museums.json";

// Callback based web request:
const request = new XMLHttpRequest();
request.open("GET", museumsDatasetUrl);

request.onload = function () {
  const museums = JSON.parse(this.responseText);
  console.log("xhr", museums);
  
  //const museum = museums.map((name, address) => name.name.__cdata + ': ' + name.address.__cdata);
  //for (const name of museum) {
  //  console.log(name);
  //}
  const museum = museums.map(m => m.name.__cdata + ': ' + m.address.__cdata + ': ' + m.phone.__cdata);
  for (const name of museum) {
    console.log(name);
  }
};

request.onerror = function (error) {
  console.error(error);
};

request.send();

setTimeout(function(){
  console.log("after a timeout of 1 second...");
}, 1000);

