export function endingConvert(number: number, titles: string[]): string {
  const cases = [2, 0, 1, 1, 1, 2];

  number = Math.abs(number);
  const c =
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5];
  return titles[c];
}
export function timeConverter(chrono: number) {
  const hours = Math.trunc(chrono / 60);
  const minutes = chrono % 60;
  const endingHours = ["час", "часа", "часов"];
  const endingMin = ["минута", "минуты", "минут"];

  if (hours !== 0) {
    return `${hours} ${endingConvert(
      hours,
      endingHours
    )} - ${minutes} ${endingConvert(minutes, endingMin)}`;
  } else {
    return `${minutes} ${endingConvert(minutes, endingMin)}`;
  }
}
