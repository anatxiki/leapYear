import { leapYear } from "../src/leapYear";

describe("un año no es bisiesto si no es divisible por 4", () => {
  it("2021 no es bisiesto", () => {
    expect(leapYear("2021")).toBeFalsy();
  });

  it("2019 no es bisiesto", () => {
    expect(leapYear("2019")).toBeFalsy();
  });
});
