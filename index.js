const one = require("./src/day1.js");

const [day] = process.argv.slice(2);
const input = `./src/input/day${day}.txt`;

switch (day) {
  case "1":
    return one(input);
  default:
    console.log("Please specify the day you want to run");
}
