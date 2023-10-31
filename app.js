const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.toggle(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  greeting.classList.toggle(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}


loginForm.addEventListener("submit", onLoginSubmit);

