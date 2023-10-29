const h1 = document.querySelector(".hello");

console.dir(h1);

function handleh1Click() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "Mouse is Here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse has left";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("Copy Cat!");
}

function handleWindowOffline() {
  alert("SOS No WiFi");
}

function handleWindowOnline() {
  alert("Okay connected!");
}

h1.addEventListener("click", handleh1Click);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("onfline", handleWindowOnline);
