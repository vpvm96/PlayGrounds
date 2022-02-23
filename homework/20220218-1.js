// 1234가 들어오면 연산자는 + - * 

const num = "1234";
const operator = "-";

function solution(num, op) {
let result = [];

  for(let i = 0; i < num.length - 1; i++) {
    let num1 = Number(num.substring(0, i + 1));
    let num2 = Number(num.substring(i + 1));
    result.push(calc(num1, num2, op));
}

  return result;
}

function calc(num1, num2, op) {
  let result;
  switch(op) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;
  }
  return result;
}

console.log(solution(num, operator));

// 11 | 11 팰린드롬 121  제한사항 : for문은 1개만

let s="789987";

function solution(s) {
  for(let i = 0; i < s.length / 2; i++) {
    let left = s[i];
    let right = s[s.length -1 -i];
    if(left !== right) {
      return false;
    }
  }
  return true;
}

console.log(solution(s));

/**
 * A: 119
 * B: 119-12345
 * C: 119-345
 * 이럴때 false
 * 
 * A: 123
 * B: 345
 * C: 56789
 * true
 */


let dictonary = ['1191-1234', '1197-3455', '119'];

function solution(dictonary) {
  let answer = true;
  dictonary.sort();

  for(let i = 0; i < dictonary.length - 1; i++) {
    let num = dictonary[i + 1].substring(0, dictonary[i].length)
    if(num === dictonary[i]) {
      answer = false;
      break;
    } 
  }
  return answer;
}
console.log(solution(dictonary));