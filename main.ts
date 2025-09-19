import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [n, k] = input.split(" ").map(Number);
let count = 0;
for (let i = 1; i <= n!; i++) {
  for (let j = 1; j <= n!; j++) {
    if (i + j < k! && k! - (i + j) <= n!) {
      count++;
    }
  }
}
console.log(count);
