const min_temp = 10;

class Thermostat {
  constructor() {
    this.temperature = 20;
  }

  up() {
    this.temperature++;
  }

  down() {
    return this.temperature <= Thermostat.min_temp
      ? this.temperature
      : this.temperature--;
  }

  static get min_temp() {
    return min_temp;
  }
}

module.exports = Thermostat;
