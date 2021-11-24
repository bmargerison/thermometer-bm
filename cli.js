const Thermostat = require("./thermostat.js");
const prompt = require("prompt-sync")();

const thermostat = new Thermostat();

while (true) {
  switch(prompt('Enter command')) {
    case 'up':
      thermostat.up();
      break;
    case 'down':
      thermostat.down();
      break;
    case 'psm on':
      thermostat.setPowerSaving(true);
      break;
    case 'psm off':
      thermostat.setPowerSaving(false);
      break;
    case 'reset':
      thermostat.reset();
      break;
    case 'current usage':
      console.log(thermostat.getCurrentUsage());
      break;
  }
  console.log(`Temperature is ${thermostat.temperature}`)
}