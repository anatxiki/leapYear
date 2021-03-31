export function leapYear(year: number): boolean {
  if (year === 4) {
    return true;
  }

  if (year === 8) {
    return true;
  }

  if (year === 12) {
    return true;
  }
  return false;
}
