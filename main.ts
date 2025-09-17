import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
let n = Number(input);
const vals: string[] = [];
while (n !== 0) {
  vals.push(n % 2 === 0 ? "0" : "1");
  n = Math.floor(n / 2);
}
console.log(vals.reverse().join("").padStart(10, "0"));
