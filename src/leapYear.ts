export function leapYear(year: number): boolean {
  if (year === 500) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }

  return false;
}
