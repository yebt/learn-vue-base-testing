export function sum(a: number, b: number): number {
  return a + b
}

export function sumArray(arr: number[]): number {
  return arr.reduce((acc, val) => acc + val, 0)
}
