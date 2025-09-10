import { readFileSync } from "fs";

const input = readFileSync("/dev/stdin", "utf-8");
const n = Number(input);
console.log(n * n);
