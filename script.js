const body = document.body;
const canvas = document.querySelector(".canvas");
const selection = document.querySelector(".selection");
const gridbtn = document.querySelector(".showgrid");
const clearbtn = document.querySelector(".clear");
const newcanvasbtn = document.querySelector(".newcanvas");
const customcolorbtn = document.querySelector(".customsel");

function createCanvas(size) {
  for (let i = 0; i < size ** 2; i++) {
    const pixel = document.createElement("div");
    pixelSize = 600 / size;
    pixel.style.width = pixelSize + "px";
    pixel.style.height = pixelSize + "px";
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
}

function removeCanvas() {
  let i = 0;
  while (canvas.hasChildNodes()) {
    document.querySelector(".pixel").remove();
    i++;
  }
  console.log(i);
}

function selectCustomColor() {
  return prompt("Enter hex value");
}

createCanvas(8);
let fillColor = "black";
let mouseDown = false;
body.onmousedown = () => (mouseDown = true);
body.onmouseup = () => (mouseDown = false);

canvas.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("pixel") && mouseDown) {
    e.target.style.backgroundColor = fillColor;
  }
});

canvas.addEventListener("click", (e) => {
  if (e.target.classList.contains("pixel")) {
    e.target.style.backgroundColor = fillColor;
  }
});

newcanvasbtn.addEventListener("click", (e) => {
  size = prompt("Enter canvas size");
  if (size <= 32) {
    removeCanvas();
    createCanvas(size);
  } else {
    alert("Maximum limit is 32");
  }
});

selection.addEventListener("click", (e) => {
  switch (e.target.id) {
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
      break;
    default:
      return;
  }
});

let toggled = false;
gridbtn.addEventListener("click", (e) => {
  if (!toggled) {
    for (const div of canvas.children) {
      div.style.borderStyle = "hidden";
    }
    toggled = true;
  } else {
    for (const div of canvas.children) {
      div.style.borderStyle = "solid";
    }
    toggled = false;
  }
});

clearbtn.addEventListener("click", (e) => {
  for (const div of canvas.children) {
    div.style.backgroundColor = "white";
  }
});

customcolorbtn.addEventListener("click", () => {
  fillColor = selectCustomColor();
});
