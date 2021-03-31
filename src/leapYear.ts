export function leapYear(year: number): boolean {
  return isDivisibleBy(year, 100)
    ? isDivisibleBy(year, 400)
    : isDivisibleBy(year, 4);
}

const isDivisibleBy = (year: number, divisor: number) => year % divisor === 0;
