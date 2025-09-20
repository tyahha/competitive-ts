import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [_, line2, ...lrs] = input.split("\n");
const as = line2!.split(" ").map(Number);
const [sums, __] = as.reduce<[number[], number]>(
  ([acc, sum], a) => {
    acc.push(sum + a);
    return [acc, sum + a];
  },
  [[], 0]
);
const n = as.length;
lrs.forEach((lr) => {
  const [l, r] = lr.split(" ").map(Number);
  if (!l || !r) return;
  console.log(sums[r! - 1]! - (sums[l! - 2] || 0));
});
