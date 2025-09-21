import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [_, line2, ...lrs] = input.split("\n");
const as = line2!.split(" ").map(Number);
const [sums, __] = as.reduce<[[number, number][], [number, number]]>(
  ([acc, [wins, looses]], a) => {
    if (a === 1) {
      wins++;
    } else {
      looses++;
    }
    acc.push([wins, looses]);
    return [acc, [wins, looses]];
  },
  [[[0, 0]], [0, 0]]
);
const n = as.length;
lrs.forEach((lr) => {
  const [l, r] = lr.split(" ").map(Number);
  if (!l || !r) return;
  const [pw, pl] = sums[r!]!;
  const [qw, ql] = sums[l - 1]!;
  const wins = pw - qw;
  const looses = pl - ql;
  console.log(wins > looses ? "win" : wins < looses ? "lose" : "draw");
});
