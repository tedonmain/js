console.clear();

for(let number = 1; number < 5; number++) {

  console.log(size);

  let button = document.createElement("button");
  let size = (number * 100) + "%";
  let buttonText = "#" + number + " - " + size
  button.innerText = buttonText;
  document.body.appendChild(button);

  button.addEventListener("click", function() {
    console.log("You picked " + buttonText);
    document.body.style.fontSize = size;
  })

}
