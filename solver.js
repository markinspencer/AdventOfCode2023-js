const fs = require("fs");
const readline = require("readline");

function readLines(filePath) {
  return new Promise((resolve, reject) => {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    const lines = [];

    rl.on("line", (line) => {
      lines.push(line);
    });

    rl.on("close", () => {
      resolve(lines);
    });

    rl.on("error", (err) => {
      reject(err);
    });
  });
}

const solve = async (path, fn) => {
  try {
    const lines = await readLines(path);
    return fn(lines);
  } catch (err) {
    console.log("Error solving puzzle", err);
  }
};

module.exports = {
  solve,
};
