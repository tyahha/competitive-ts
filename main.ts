import { readFileSync } from "fs";

const getLine = (() => {
  const input = readFileSync("/dev/stdin", "utf-8");
  const lines = input.split(/\r?\n/);
  let idx = 0;
  return () => lines[idx++];
})();

const [_, x] = getLine().split(" ").map(Number);
const aa = getLine().split(" ").map(Number);
let cur = Math.floor(aa.length / 2);
let left = 0;
let right = aa.length - 1;
while (true) {
  if (aa[cur] < x) {
    left = cur + 1;
    cur = Math.floor((left + right) / 2);
  } else if (aa[cur] > x) {
    right = cur - 1;
    cur = Math.floor((left + right) / 2);
  } else {
    console.log(cur + 1);
    break;
  }
  if (left > right) {
    console.log(-1);
    break;
  }
}
