const express = require('express');
const app = express();
const port = 3000;
const WeatherApi = require("./weatherApi");
const Thermostat = require("./thermostat");
const thermostat = new Thermostat(new WeatherApi);

app.get('/temperature', (req, res) => {
  res.send(JSON.stringify(thermostat.temperature));
});

app.post('/up', (req, res) => {
  thermostat.up();
});

app.post('/down', (req, res) => {
  thermostat.up();
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
});


app.listen(port, () => console.log(`Server listening on ${port}`));