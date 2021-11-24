const min_temp = 10;

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.maxTemp = 25;
    this.powerSaving = true;
  }

  up() {
    this.temperature >= this.maxTemp ? this.maxTemp : this.temperature++;
  }

  down() {
    return this.temperature <= Thermostat.min_temp
      ? this.temperature
      : this.temperature--;
  }

  static get min_temp() {
    return min_temp;
  }

  setPowerSaving(onoff) {
    this.powerSaving = onoff;
    this.powerSaving ? this.maxTemp : (this.maxTemp = 32);
  }

  reset() {
    this.temperature = 20;
  }

  getCurrentUsage() {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
