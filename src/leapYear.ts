export function leapYear(year: number): boolean {
  if (isNotLeapYear(year)) {
    return false;
  }

  if (isDivisibleBy(year, 4)) {
    return true;
  }

  return false;
}

const isDivisibleBy = (year: number, divisor: number) => year % divisor === 0;
const isNotLeapYear = (year: number) =>
  isDivisibleBy(year, 100) && !isDivisibleBy(year, 400);
