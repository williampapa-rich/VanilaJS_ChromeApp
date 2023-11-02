// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const title = document.querySelector("h2");
title.style.color = colors[4];

const superEvnetHandler = {
  onMouseEnter: function () {
    title.innerText = "The Mouse is here!";
    title.style.color = colors[0];
  },

  onMouseLeave: function () {
    title.innerText = "The Mouse is gone!";
    title.style.color = colors[1];
  },

  onMouseRightClick: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[2];
  },

  onResized: function () {
    title.innerText = "You juse resized!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEvnetHandler.onMouseEnter);
title.addEventListener("mouseleave", superEvnetHandler.onMouseLeave);
window.addEventListener("contextmenu", superEvnetHandler.onMouseRightClick);
window.addEventListener("resize", superEvnetHandler.onResized);
