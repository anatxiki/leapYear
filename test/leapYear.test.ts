import { leapYear } from "../src/leapYear";

describe("comprueba si un año es bisiesto", () => {
  it("2021 no es bisiesto", () => {
    expect(leapYear(2021)).toBeFalsy();
  });

  it("2020 es bisiesto", () => {
    expect(leapYear(2020)).toBeTruthy();
  });

  it("4 es bisiesto", () => {
    expect(leapYear(4)).toBeTruthy();
  });

  it("8 es bisiesto", () => {
    expect(leapYear(8)).toBeTruthy();
  });
});
