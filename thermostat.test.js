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

  test("if powersaving on max temp is 25 degrees", () => {
    thermostat = new Thermostat();
    for (i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBe(25);
  });

  test("if powersaving off max temp is 25 degrees", () => {
    thermostat = new Thermostat();
    thermostat.setPowerSaving(false);
    for (i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toBe(32);
  });

  test("can reset thermostat back to a default of 20", () => {
    thermostat = new Thermostat();
    for (i = 0; i < 5; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.temperature).toBe(20);
  });

  test("returns low usage if temperature is less than 18 degrees", () => {
    thermostat = new Thermostat();
    for (i = 0; i < 5; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentUsage()).toBe("low-usage");
  });

  test("returns middle usage if temperature is less than or equal to 25 degrees", () => {
    thermostat = new Thermostat();
    for (i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentUsage()).toBe("medium-usage");
  });

  test("returns high usage if temperature is anything other than low and middle", () => {
    thermostat = new Thermostat();
    thermostat.setPowerSaving(false);
    for (i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getCurrentUsage()).toBe("high-usage");
  });
});
