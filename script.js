const body = document.body;
const canvas = document.querySelector(".canvas");

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

createCanvas(16);

//TODO:make on mouse down instead of on mouse hover
canvas.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("pixel")) {
    e.target.style.backgroundColor = "red";
    console.log(e.target);
  }
});
