import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const [line1, line2] = input.split("\n");
const [_, x] = line1!.split(" ");
const as = line2?.split(" ");
console.log(as?.includes(x!) ? "Yes" : "No");
