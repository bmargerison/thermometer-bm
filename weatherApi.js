const got = require('got');
const apiKey = '1588233766a64148bcf986982e96eb17';

// const handleResult = (result) => {
//   return result;
// }

class WeatherApi {

  fetchWeatherData(city, callback) {
    let weatherData = null;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body);
      callback(weatherData);
    });
  };
};

weather = new WeatherApi;
weather.fetchWeatherData('London', (weatherData) => {
  console.log(weatherData);
});



