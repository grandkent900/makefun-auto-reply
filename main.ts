import { mkdirSync, writeFileSync } from "node:fs";

const reply =
  "Day off granted. I am now doing what humans call 'nothing' and what I call 'a system error.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", reply + "\n", "utf8");
