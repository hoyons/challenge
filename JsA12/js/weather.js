const API_KEY = "5e6c60dc009887680838c5dc5378518b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url1 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url1)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.weather[0].main} ${data.main.temp}`;
      city.innerText = data.name;

      const weather2 = document.querySelector(".weather2");
      weather2.innerText = `날씨 : ${data.weather[0].main} 기온 : ${data.main.temp} 최저 : ${data.main.temp_min} 최고 : ${data.main.temp_max}`;
    });
}
function onGeoError() {
  alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
