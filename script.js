const canvas = document.querySelector(".canvas");

function createCanvas(size) {
  for (let i = 0; i < size; i++) {
    const pixel = document.createElement("div");
    pixel.innerHTML = "asd ";
    pixel.classList.add("pixel");
    canvas.appendChild(pixel);
  }
}

createCanvas(16);

canvas.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "red";
  console.log(e.target);
});
