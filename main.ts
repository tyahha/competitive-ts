import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
let n = 0;
input
  .trim()
  .split("")
  .reverse()
  .forEach((c, i) => {
    n += Math.pow(2, i) * (c === "1" ? 1 : 0);
  });

console.log(n);
