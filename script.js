const body = document.body;
const canvas = document.querySelector(".canvas");
const selection = document.querySelector(".selection");

function createCanvas(size) {
  for (let i = 0; i < size ** 2; i++) {
    const pixel = document.createElement("div");
    pixelSize = Math.floor(600 / size);
    pixel.style.width = pixelSize + "px";
    pixel.style.height = pixelSize + "px";
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
}

function selectCustomColor() {
  return prompt("Enter hex value");
}

createCanvas(16);
let fillColor = "red";
//TODO:make on mouse down instead of on mouse hover
canvas.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("pixel")) {
    e.target.style.backgroundColor = fillColor;
    console.log(e.target);
  }
});

selection.addEventListener("click", (e) => {
  switch (e.target.innerText) {
    case "red":
      fillColor = "red";
      break;
    case "white":
      fillColor = "white";
      break;
    case "black":
      fillColor = "black";
      break;
    case "green":
      fillColor = "green";
    case "custom":
      fillColor = selectCustomColor();
      break;
    default:
      return;
  }
});
