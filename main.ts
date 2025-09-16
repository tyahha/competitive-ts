import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [_, line2] = input.split("\n");
const ps = line2!.split(" ").map(Number);
let found = false;
for (let i = 0; i < ps.length - 2; i++) {
  for (let j = i + 1; j < ps.length - 1; j++) {
    for (let k = i + 2; k < ps.length; k++) {
      if (ps[i]! + ps[j]! + ps[k]! === 1000) {
        found = true;
        break;
      }
    }
    if (found) break;
  }
  if (found) break;
}
console.log(found ? "Yes" : "No");
