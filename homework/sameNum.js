// 1. 중복번호 없애기
//ex) arr = [1, 1, 3, 3, 0, 1, 1] -> return:[1, 3, 0, 1]
//    arr = [4, 4, 4, 3, 3] -> return:[4, 3]
//    Solutuion: Fill the function of solution

// function solution(arr) {
//  var answer = [];
//  return answer;
//}

// function solution() {
//   var answer = [];
//   var arr = [1, 1, 3, 3, 0, 1, 1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] !== arr[i]) {
//       answer.push(arr[i]);
//     }
//   }

//   return answer;
// }
// console.log(solution());

function solution(n) {
  var answer = "";
  for (let i = 0; i < n; i++) {
    if (n % i == 1) {
      answer += "수";
    } else {
      answer += "박";
    }
  }
  return answer;
}
