// named export by default in ts
export function multiply(a: number, b: number): number {
  return a * b;
}

// making it 'default' export
export default function multiplyByTwo(num: number): number {
  return multiply(num, 2);
}
