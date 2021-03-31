import { leapYear } from "../src/leapYear";

describe("comprueba si un año es bisiesto", () => {
  it.each([[4], [8], [12], [400], [800], [1200]])("%d es bisiesto", (value) => {
    expect(leapYear(value)).toBeTruthy();
  });

  it.each([[2], [100], [200], [500], [2100]])("%d no es bisiesto", (value) => {
    expect(leapYear(value)).toBeFalsy();
  });
});
