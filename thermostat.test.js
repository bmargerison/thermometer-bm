const Thermostat = require('./thermostat.js');

describe('thermostat', () => {
  test('starts at 20 degrees', () => {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toBe(20);
  });
});