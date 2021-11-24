const min_temp = 10;

class Thermostat {

  constructor() {
    this.temperature = 20;
  }

  up() {
    this.temperature++;
  }

  down() {
    if (this.temeprature <= Thermostat.min_temp) {
       this.temperature = Thermostat.min_temp;
    } else {
      this.temperature -= 1;
    }
   // return(this.temeprature <= Thermostat.min_temp ? this.temperature = Thermostat.min_temp : this.temperature--);
  }

  static get min_temp() {
    return min_temp
  }
}




module.exports = Thermostat;