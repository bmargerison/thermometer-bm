const got = require('got');
const apiKey = require('./api_key');

class WeatherApi {

  fetchWeatherData(city, callback) {
    let weatherData = null;
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`
    got(apiUrl).then((response) => {
      weatherData = JSON.parse(response.body).main.temp
      callback(weatherData);
    });
  };

};

module.exports = WeatherApi;

