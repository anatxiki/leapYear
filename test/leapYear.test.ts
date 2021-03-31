import { isLeapYear } from "../src/leapYear";

describe("comprueba si un año es bisiesto", () => {
  it.each([[4], [8], [12], [400], [800], [1200]])("%d es bisiesto", (value) => {
    expect(isLeapYear(value)).toBe(true);
  });

  it.each([[2], [100], [200], [500], [2100]])("%d no es bisiesto", (value) => {
    expect(isLeapYear(value)).toBe(false);
  });
});
