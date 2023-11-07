const API_KEY = "49c9ec91c407552e4dc13333d93546ce";

function onGeoOK(posision) {
  const lat = posision.coords.latitude;
  const lon = posision.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}℃`;
      city.innerText = data.name;
    });
}
function onGeoError() {
  alert("Cna't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
