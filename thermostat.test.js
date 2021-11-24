const Thermostat = require("./thermostat.js");

describe("thermostat", () => {
  test("starts at 20 degrees", () => {
    thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

  test("increases temperature by 1 degree", () => {
    thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temperature).toBe(21);
  });

  test("decreases temperature by 1 degree", () => {
    thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.temperature).toBe(19);
  });

  test("cannot go below minimum 10 degrees", () => {
    thermostat = new Thermostat();
    for (i = 0; i < 10; i++) {
      thermostat.down();
    }
    thermostat.down();
    expect(thermostat.temperature).toBe(10);
  });
});
