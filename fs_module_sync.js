// fs (sync)

const NEW_LINE = "\n";

const { readFileSync, writeFileSync } = require("fs");

console.log("sync start");

const first = readFileSync("./content/subfolder/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
console.log(first + NEW_LINE + second);

writeFileSync("./content/writeExample.txt", `Here is the result;${NEW_LINE}${first}${NEW_LINE}${second}`,
    { flag: 'a' }); // flag append

console.log("sync task finished");