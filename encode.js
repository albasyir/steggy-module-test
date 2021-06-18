const fs = require("fs");
const steggy = require("steggy");

const original = fs.readFileSync(__dirname + "/source/example.png");
const message = "HELP ME";

const concealed = steggy.conceal()(original, message);
fs.writeFileSync(__dirname + "/output/example.png", concealed);
