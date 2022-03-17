let str = "I have a money"

function solution () {
  let arr = str.split(" ");
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  let answer = [];
  for (let i = 0; i < result.length; i+=2) {
    let count = "";
    let len = i + 2;
    len = len > result.length ? result.length : len;
    for (let j = i; j < len; j++) {
      count += result[j];
    }
    answer.push(count);
  }
  answer.map(item => console.log(item));
}
solution();