const h1 = document.querySelector(".hello");

function handleh1Click() {
  h1.classList.toggle("clicked");
}


h1.addEventListener("click", handleh1Click);
