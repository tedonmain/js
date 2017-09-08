let museumList = {};

const museums = (address) => {
  
  const request = new XMLHttpRequest();
  request.open("GET", address);
  
  request.onload = () => {
    let museums = Object.assign(museumList,JSON.parse(request.responseText).map(m => m.name.__cdata + ': ' + m.address.__cdata + ': ' + m.phone.__cdata));
    exp(museums);
  };
  
  request.onerror = function (error) {
    console.error(error);
  };
  
  request.send();
  
};

const exp = (exportThisList) => {
  console.log(exportThisList);
};

museums("../../datasets/museums.json");

setTimeout(function(){
  console.log("after a timeout of 3 seconds...here comes the museum list...");
  console.log(museumList);
}, 3000);

setTimeout(function(){
  console.log("after another timeout of an additional 3 seconds...here comes the museum list again ...");
  for (let key in museumList) {
    console.log(museumList[key]);
  }
}, 3000);

