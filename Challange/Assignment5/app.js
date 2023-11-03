let CANVAS_COLOR = null;
const WINDOWWIDTH = window.innerWidth;
const title = document.querySelector("h1");
const canvas = document.querySelector("body");

function colorResizing() {
  const resizedWidth = window.innerWidth;

  if (resizedWidth < 600) {
    canvas.classList.remove(CANVAS_COLOR);
    CANVAS_COLOR = "floor";
    canvas.classList.add(CANVAS_COLOR);
  } else if (resizedWidth >= 600 && resizedWidth < 700) {
    canvas.classList.remove(CANVAS_COLOR);
    CANVAS_COLOR = "low";
    canvas.classList.add(CANVAS_COLOR);
  } else if (resizedWidth >= 700 && resizedWidth < 800) {
    canvas.classList.remove(CANVAS_COLOR);
    CANVAS_COLOR = "middle";
    canvas.classList.add(CANVAS_COLOR);
  } else if (resizedWidth > 800) {
    canvas.classList.remove(CANVAS_COLOR);
    CANVAS_COLOR = "high";
    canvas.classList.add(CANVAS_COLOR);
  }
}

if (WINDOWWIDTH < 600) {
  canvas.classList.remove(CANVAS_COLOR);
  CANVAS_COLOR = "floor";
  canvas.classList.add(CANVAS_COLOR);
} else if (WINDOWWIDTH >= 600 && WINDOWWIDTH < 700) {
  canvas.classList.remove(CANVAS_COLOR);
  CANVAS_COLOR = "low";
  canvas.classList.add(CANVAS_COLOR);
} else if (WINDOWWIDTH >= 700 && WINDOWWIDTH < 800) {
  canvas.classList.remove(CANVAS_COLOR);
  CANVAS_COLOR = "middle";
  canvas.classList.add(CANVAS_COLOR);
} else if (WINDOWWIDTH > 800) {
  canvas.classList.remove(CANVAS_COLOR);
  CANVAS_COLOR = "high";
  canvas.classList.add(CANVAS_COLOR);
}

window.addEventListener("resize", colorResizing);
