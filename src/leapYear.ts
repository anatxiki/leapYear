export function leapYear(year: number): boolean {
  if (isDivisibleBy(year, 400)) {
    return true;
  }
  if (isDivisibleBy(year, 100)) {
    return false;
  }
  if (isDivisibleBy(year, 4)) {
    return true;
  }

  return false;
}

const isDivisibleBy = (year: number, divisor: number) => year % divisor === 0;
