import { leapYear } from "../src/leapYear";

describe("", () => {
  it("un año no es bisiesto si no es divisible por 4", () => {
    expect(leapYear("2021")).toBeFalsy();
  });
});
