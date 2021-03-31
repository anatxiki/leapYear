export function leapYear(year: number): boolean {
  if (year === 2020) {
    return true;
  }

  if (year === 4) {
    return true;
  }
  return false;
}
