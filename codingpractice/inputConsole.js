const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let line = [];

rl.on('line', function (line) {
    line.push(line);
  })
  .on('close', function () {
    console.log(line);
    process.exit();
});