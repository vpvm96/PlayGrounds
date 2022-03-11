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

// 값 입력 받기.

rl.on("line", (line) => {
    console.log(line)
    rl.close();
});

// rl.on('close', () => {
//     console.log(myInput);
// })

// 여러 줄 입출력 처리하기

var count = 0; // 몇 번째 입력인지 기록
rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가

  if (count === 1) {
    // 첫 번째 입력인 경우 동작
  } else if (count === 2) {
    // 두 번째 입력인 경우 동작
  } else if (count === 3) {
    // 세 번째 입력인 경우 동작
  } else {
    // 네 번째 입력인 경우 동작
    rl.close(); // 입력 종료
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
});

// N줄 입력 처리하기.

var count = 0; // 몇 번째 입력인지 기록
var N = 0; // 첫 번째 줄에 입력된 N
var input = [];

rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가
  if (count === 1) {
    // 첫 번째 입력인 경우 앞으로 주어질 입력 개수 기록
    N = x;
  } else {
    // 이후 입력되는 N개의 입력은 배열에 저장
    input.push(x);
  }
  if (count > N) {
    // N번 입력을 받은 뒤 종료
    rl.close();
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
  console.log(input);
});