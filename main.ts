import { readFileSync } from "fs";

const getLine = (() => {
  const input = readFileSync("/dev/stdin", "utf-8");
  const lines = input.split(/\r?\n/);
  let idx = 0;
  return () => lines[idx++];
})();

const [h, w] = getLine().split(" ").map(Number);
const m: number[][] = [];
for (let i = 0; i < h; i++) {
  m.push(getLine().split(" ").map(Number));
}
for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    const prev = m[i][j - 1] ?? 0;
    m[i][j] += prev;
  }
}
for (let j = 0; j < w; j++) {
  for (let i = 0; i < h; i++) {
    const prev = m[i - 1]?.[j] ?? 0;
    m[i][j] += prev;
  }
}
const q = Number(getLine());
for (let i = 0; i < q; i++) {
  const [a, b, c, d] = getLine()
    .split(" ")
    .map((x) => Number(x) - 1);
  const total = m[c][d];
  const left = m[c][b - 1] ?? 0;
  const up = m[a - 1]?.[d] ?? 0;
  const corner = m[a - 1]?.[b - 1] ?? 0;
  console.log(total - left - up + corner);
}
