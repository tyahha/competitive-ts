import { readFileSync } from "fs";

const getLine = (() => {
  const input = readFileSync("/dev/stdin", "utf-8");
  const lines = input.split(/\r?\n/);
  let idx = 0;
  return () => lines[idx++];
})();

const [h, w, n] = getLine().split(" ").map(Number);
const m: number[][] = Array(h + 1)
  .fill(0)
  .map(() => Array(w + 1).fill(0));

for (let i = 0; i < n; i++) {
  const [a, b, c, d] = getLine().split(" ").map(Number);
  m[a - 1][b - 1] += 1;
  m[c][d] += 1;
  m[a - 1][d] -= 1;
  m[c][b - 1] -= 1;
}

for (let i = 0; i < h; i++) {
  for (let j = 0; j < w; j++) {
    m[i][j + 1] += m[i][j];
  }
}

for (let j = 0; j < w; j++) {
  for (let i = 0; i < h; i++) {
    m[i + 1][j] += m[i][j];
  }
}

for (let i = 0; i < h; i++) {
  console.log(m[i].slice(0, w).join(" "));
}
