const tenArr = (string) => {
  const result = string.join();
  for (let i = 0; i < 10; i++) {
    result.slice(0, 10);
  }
};

string = "BaekjoonOnlineJudge";

console.log(tenArr(string));


const fs = require('fs');
const inputData = fs.readFileSync(0, 'utf8').toString().split(' ');

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);

console.log(A+B);
