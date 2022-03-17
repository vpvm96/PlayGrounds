let result = "";
let safe = "할푼리"

function solution(a, b) {
  let num = Math.floor(b / a * 1000) + "";
  for(let i = 0; i < num.length; i++) {
    if(num[i] != "0") {
      result += num[i] + safe[i];
    }
  }
  console.log(result);
}
solution(3, 2);