//Path
const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt"); // normalized
console.log(filePath);

const base = path.basename(filePath); //filename
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);

