let removeButton = document.createElement("button");
let mainElement = document.createElement("main");
let imgElement = document.createElement("img");
let anchorElement = document.createElement("a");
let inputElement = document.createElement("input");
let createButton = document.createElement("button");

inputElement.setAttribute("type", "text");
document.body.appendChild(inputElement);
document.body.appendChild(createButton);
document.body.appendChild(removeButton);
document.body.appendChild(mainElement);

mainElement.appendChild(imgElement);
mainElement.appendChild(anchorElement);
removeButton.style.width = "100px";
removeButton.style.height = "25px";
removeButton.innerText = "Remove";

createButton.style.width = "100px";
createButton.style.height = "25px";
createButton.innerText = "Create";
createButton.style.margin = "10px";

imgElement.className = "image";
imgElement.src =
  "https://nwscdn.com/media/catalog/product/t/r/training_soccer_ball_in_orange.jpg";
imgElement.style.height = "600px";
imgElement.style.width = "600px";

anchorElement.className = "link";
anchorElement.href = "https://www.google.com/imghp?hl=en&tab=wi&ogbl";
anchorElement.innerText = "Link to Google image";

removeButton.addEventListener("click", function () {
  mainElement.remove();
  anchorElement.remove();
});

createButton.addEventListener("click", function () {
  let inputValue = inputElement.value;
  let input = document.createElement(inputValue);
  //   input.append("Hello");
  document.body.append(input);
});
