const Thermostat = require('./thermostat.js');

describe('thermostat', () => {
  test('starts at 20 degrees', () => {
    thermostat = new Thermostat();
    expect(thermostat.getTemperature).toBe(20);
  });

  test('increases temperature by 1 degree', () => {
    thermostat = new Thermostat();
    thermostat.up
    expect(thermostat.getTemperature).toBe(21);
  });
});