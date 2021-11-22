class Thermostat {
  contructor() {
    this.temperature = 20;
  }

  get getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature += 1
  }
}

module.exports = Thermostat;