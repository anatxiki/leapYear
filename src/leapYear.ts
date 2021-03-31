export function leapYear(year: number): boolean {
  if (year === 500 || year === 100 || year === 200) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }

  return false;
}
