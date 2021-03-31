import { leapYear } from "../src/leapYear";

describe("comprueba si un año es bisiesto", () => {
  it("4 es bisiesto", () => {
    expect(leapYear(4)).toBeTruthy();
  });

  it("8 es bisiesto", () => {
    expect(leapYear(8)).toBeTruthy();
  });

  it("12 es bisiesto", () => {
    expect(leapYear(12)).toBeTruthy();
  });

  it("2 no es bisiesto", () => {
    expect(leapYear(2)).toBeFalsy();
  });

  it("500 no es bisiesto", () => {
    expect(leapYear(500)).toBeFalsy();
  });

  it("100 no es bisiesto", () => {
    expect(leapYear(100)).toBeFalsy();
  });

  it("200 no es bisiesto", () => {
    expect(leapYear(200)).toBeFalsy();
  });

  it("400 es bisiesto", () => {
    expect(leapYear(400)).toBeTruthy();
  });
});
