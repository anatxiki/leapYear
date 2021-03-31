export function leapYear(year: number): boolean {
  if (year === 400 || year === 800) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }

  return false;
}
