export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}
export function getMinOfArray(numArray: number[]): number {
  console.log(Math.min.apply(null, numArray));
  return Math.min.apply(null, numArray);
}
