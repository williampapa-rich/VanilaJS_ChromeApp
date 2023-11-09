const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const colorBtn = document.getElementById("colorBtn");
let colorA;
let colorB;

function colorSelector() {
  colorA = colors[parseInt(Math.floor(Math.random() * colors.length))];
  colorB = colors[parseInt(Math.floor(Math.random() * colors.length))];

  while (colorA === colorB) {
    colorB = colors[parseInt(Math.floor(Math.random() * colors.length))];
  }
  setColor(colorA, colorB);
}

function setColor(colorA, colorB) {
  const body = document.querySelector("body");
  body.style.back;
  body.style.backgroundImage = `linear-gradient(0.25turn, ${colorA}, ${colorB})`;
  //body.style("background: linear-gradient(0.25turn, colorA, colorB)");
}

colorSelector();
colorBtn.addEventListener("click", colorSelector);
