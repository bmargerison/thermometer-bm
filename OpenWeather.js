const got = require('got')
const apiKey = '1588233766a64148bcf986982e96eb17'
const city = 'London'
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

let weatherData = null

got(apiUrl).then((response) => {
  weatherData = JSON.parse(response.body);
  console.log(weatherData);
});

console.log('Requesting weather data');