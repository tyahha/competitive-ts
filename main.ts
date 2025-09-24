import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [line1, line2, ...lrs] = input.split("\n");
const t = Number(line1);
const n = Number(line2);
const aa = Array(t).fill(0);
for (let i = 0; i < n; i++) {
  const [l, r] = lrs![i]!.split(" ").map(Number);
  aa[l!]++;
  aa[r!]--;
}
let count = 0;
for (let i = 0; i < t; i++) {
  count += aa[i]!;
  console.log(count);
}
