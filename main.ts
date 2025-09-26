import { readFileSync } from "fs";

const getLine = (() => {
  const input = readFileSync("/dev/stdin", "utf-8");
  const lines = input.split(/\r?\n/);
  let idx = 0;
  return () => lines[idx++];
})();

const MAX = 1500;
const n = Number(getLine());
const m: number[][] = Array(MAX + 2)
  .fill(0)
  .map(() => Array(MAX + 2).fill(0));
for (let i = 0; i < n; i++) {
  const [x, y] = getLine().split(" ").map(Number);
  m[y][x]++;
}
for (let i = 1; i <= MAX; i++) {
  for (let j = 1; j <= MAX; j++) {
    const prev = m[i][j - 1];
    m[i][j] += prev;
  }
}
for (let j = 1; j <= MAX; j++) {
  for (let i = 1; i <= MAX; i++) {
    const prev = m[i - 1][j];
    m[i][j] += prev;
  }
}
const q = Number(getLine());
for (let i = 0; i < q; i++) {
  const [a, b, c, d] = getLine().split(" ").map(Number);
  const total = m[d][c];
  const left = m[d][a - 1];
  const up = m[b - 1][c];
  const corner = m[b - 1][a - 1];
  console.log(total - left - up + corner);
}
