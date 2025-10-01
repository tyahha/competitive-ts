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
  const [x1, y1, x2, y2] = getLine()
    .split(" ")
    .map(Number)
    .map((v) => v + 1);
  m[y1][x1] += 1;
  m[y2][x2] += 1;
  m[y1][x2] -= 1;
  m[y2][x1] -= 1;
}

for (let i = 1; i <= MAX; i++) {
  for (let j = 1; j <= MAX; j++) {
    m[i][j + 1] += m[i][j];
  }
}

for (let j = 1; j <= MAX; j++) {
  for (let i = 1; i <= MAX; i++) {
    m[i + 1][j] += m[i][j];
  }
}

let count = 0;
for (let i = 1; i <= MAX; i++) {
  count += m[i].filter((x) => x > 0).length;
}
console.log(count);
