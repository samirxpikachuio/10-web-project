document.getElementById('searchButton').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  fetchWeather(city);
});

async function fetchWeather(city) {
  const apiUrl = `https://www.samirxpikachu.run.place/weather/${city}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayWeather(data) {
  document.getElementById('location').innerText = `${data.city}, ${data.country}`;
  document.getElementById('temperature').innerText = `${data.temperature.celsius}°C`;
  document.getElementById('condition').innerText = data.condition.text;
  document.getElementById('icon').src = data.condition.icon;
  document.getElementById('wind').innerText = `${data.wind.speed_kph} km/h`;
  document.getElementById('humidity').innerText = `${data.humidity}%`;
  document.getElementById('uvIndex').innerText = data.uv_index;

  document.getElementById('localtime').innerText = data.localtime;
  
  document.getElementById('weatherInfo').style.display = 'block';
}
