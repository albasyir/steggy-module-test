const fs = require("fs");
const steggy = require("steggy");

const image = fs.readFileSync("./output/example.png");
const revealed = steggy.reveal()(image);
console.log(revealed.toString());
