const { solve } = require("../solver");

const words = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const isDigit = (code) => code >= 48 && code <= 57;
const getCode = (c) => c.charCodeAt(0) & 0xff;

const partOne = (lines) => {
  let sum = 0;
  lines.forEach((line) => {
    let digit = 0;
    for (let i = 0; i < line.length; i++) {
      let c = line[i];
      let code = getCode(c);

      if (isDigit(code)) {
        if (digit == 0) {
          sum += parseInt(c) * 10;
        }
        digit = c;
      }
    }
    sum += parseInt(digit);
  });

  return sum;
};

const partTwo = (lines) => {
  let sum = 0;
  lines.forEach((line) => {
    let digit = 0;
    for (let i = 0; i < line.length; i++) {
      let c = line[i];
      let code = getCode(c);

      if (isDigit(code)) {
        if (digit == 0) {
          sum += parseInt(c) * 10;
        }
        digit = c;
      } else {
        for (let j = 1; j <= words.length; j++) {
          let word = words[j - 1];

          if (line.substring(i).startsWith(word)) {
            if (digit === 0) {
              sum += j * 10;
            }
            digit = j;
            break;
          }
        }
      }
    }
    sum += parseInt(digit);
  });

  return sum;
};

module.exports = async (input) => {
  console.log("SOLVING DAY 1");
  console.log("Part One:", await solve(input, partOne));
  console.log("Part Two:", await solve(input, partTwo));
};
