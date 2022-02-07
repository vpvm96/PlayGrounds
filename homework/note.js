// const calculate = (command, a, b) => {
//     switch (command) {
//         case 'add':
//             return a + b;
//         case 'subtract':
//             return a - b;
//         case 'divide':
//             return a / b;
//         case 'multiply':
//             return a * b;
//         case 'remainder':
//             return a % b;
//         default:
//             throw Error('unkown command');
//     }
// }
// console.log(calculate('add', 3, 9));
// console.log(calculate('subtract', 50, 30));
// console.log(calculate('divide', 10, 2));
// console.log(calculate('multiply', 10, 10));
// console.log(calculate('remainder', 50, 2));

//----------------------------------------------------

// 1. 100개의 랜덤숫자를 만들고 요소 합을 구하시오.

// const randomArr = [];

// const randNum = (randomArr) => {
//     for(let i = 0; i < 100; i++) {
//         randomArr[i] = Math.floor(Math.random() * 100);
//     }
//     console.log(randomArr);
// }

// let num = (a, b) => {

// }

// const add = (randomArr) => {
//     let num = 0;

//     for(let i = 0; i < randomArr.length; i++) {
//         num += randomArr[i];
//     }

//     return num;
// }

// console.log(add(randomArr));

// 실패함 뭔가 안 맞음
//-------------------------------------------------------

// 1. a = 5, b = 3 두 수의 교환.
// 2. 1 ~ 10 까지 랜덤 -> 최대 최소 찾고 두 요소 교환.
// 3. 1 ~ 10 까지 랜덤 수 -> 정렬 .sort() 사용 x

// const randomArr = [];

// const randomNum = (randomArr) => {
//     for(let i = 0; i < 10; i++) {
//         randomArr[i] = Math.floor(Math.random() * 10 + 1);
//     }
//     console.log(randomArr);

//     let max = randomArr[0];
//     let maxIndex = 0;

//     for(let i = 1; i < randomArr.length; i++) {
//         if(max < randomArr[i]) {
//             max = randomArr[i];
//             maxIndex = i;
//         }
//     }

//     let min = randomArr[0];
//     let minIndex = 0;

//     for(let i = 1; i < randomArr.length; i++) {
//         if(min > randomArr[i]) {
//             max = randomArr[i];
//             maxIndex = i;
//         }
//     }

//     swap(maxIndex, minIndex, randomArr);
// }

// const swap = (a, b, randomArr) => {
//     let swapNum = a;
//     a = b;
//     b = swapNum;
//     console.log("바뀔 숫자는 : " + randomArr[a] + " " + randomArr[b]);
// }
// randomNum(randomArr);

// --------------------------------------------------------------------------------

// 도형문제

// let horizontal = 5 // 가로
// let vertical = 3 // 세로
// let base = 10 // 밑변
// let height = 15 // 높이
// let perimeter = 3.14 // 원주율
// let radius = 2 // 반지름

// // 직사각형 넒이 구하기  가로 x 세로
// const squere = (horizontal, vertical) => {
//     return horizontal * vertical;
// }

// console.log (squere(horizontal, vertical));

// // 삼각형 넒이 구하기  높이 x 밑변 / 2
// const triangle = (base, height) => {
//     return base * height / 2;
// }

// console.log(triangle(base, height));

// // 원의 넒이 구하기 원주율 x 반지름의 제곱
// const circle = (perimeter, radius) => {
//     return perimeter * radius **2;
// }

// console.log(circle(perimeter, radius));

// -----------------------------------------------------------------------------------------

// 계산기

// let a = 5
// let b = 1

// const add = (a, b) => {
//     return a + b;
// }

// const subtract = (a, b) => {
//     return a - b;
// }

// const divide = (a, b) => {
//     return a / b;
// }

// const multiply = (a, b) => {
//     return a * b;
// }

// const squared = (a) => {
//     return a**2;
// }

// const remainder = (a, b) => {
//     return a % b;
// }

// console.log(add(a, b))
// console.log(subtract(a, b))
// console.log(divide(a, b))
// console.log(multiply(a, b))
// console.log(squared(a))
// console.log(remainder(a, b))

// ------------------------------------------------------------------

// const randomArr = [];

// const randomNum = (randomArr) => {
//   for (let i = 0; i < 10; i++) {
//     randomArr[i] = Math.floor(Math.random() * 10 + 1);
//   }

//   console.log(randomArr);

//   let max = randomArr[0];
//   let maxIndex = 0;

//   for (let i = 1; i < randomArr.length; i++) {
//     if (max < randomArr[i]) {
//       max = randomArr[i];
//       maxIndex = i;
//     }
//   }

//   let min = randomArr[0];
//   let minIndex = 0;

//   for (let i = 1; i < randomArr.length; i++) {
//     if (min > randomArr[i]) {
//       min = randomArr[i];
//       minIndex = i;
//     }
//   }

//   swap(maxIndex, minIndex, randomArr);
// };

// const swap = (a, b, randomArr) => {
//   let swapNum = a;
//   a = b;
//   b = swapNum;
//   console.log(`바뀔 숫자는: ${+randomArr[a] + ' ' + randomArr[b]}`);
// };
// randonNum(randomArr);

// ---------------------------------------------------------------

// 부족한 금액 계산하기

// function solution(price, money, count) {
//   let result = 0;

//   for (let i = 1; i <= count; i++) {
//     result += price * i;
//   }

//   if (result < money) result = 0;
//   else result -= money;

//   return result;
// }

// ----------------------------------------------------------------

// let arr = [8, 3, 10, 11, 1, 5, 2, 99, 81, 100];

// const sort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = i + 1; j < arr.length; i++) {
//       let swap;
//       if(arr[j] < arr[i]) {
//         swap = arr[j];
//         arr[j] = arr[i];
//         arr[i] = swap;
//       }
//     }
//   }
//   return arr;
// };
// sort(arr);
// console.log(arr);

// ------------------------------------------------------------------------

// let score = 100;

// if (score >= 90 && score <= 100) {
//   console.log("A");
// }else if (socre >= 80 && score <= 89) {
//   console.log("B");
// }else if (socre >= 70 && score <= 79) {
//   console.log("C");
// }else if (socre >= 60 && score <= 69) {
//   console.log("D");
// }else if (score > 100) {
//   console.log("Not");
// }else {
//   console.log("F");
// }

// let a = 2;

// for (let i = 1; i <= 9; i++) {
//   console.log(`2 x ${i} = ${a * i}`);
// }

// const gugudan = () => {
//   for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//     }
//   }
//   console.log(gugudan(`${i} x ${j} = ${i * j}`));
// }

// -----------------------------------------------2021-12-24

// const gugudan = () => {
//   for(let i = 1; i <= 9; i++) {
//     for(let j = 1; j <= 9; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }

// gugudan();

// const randomNum = Math.random() * 50
// const randomNumFloor = Math.floor(randomNum + 1)

// console.log(randomNumFloor);

//구구단의 짝수찾기
// const gugudanEven = () => {
//   for(let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 9; j++) {
//       if(i * j % 2 === 0) {    === 1 이면 홀수
//         console.log(i * j);
//       }
//     }
//   }
// }
// gugudanEven()

// 구구단의 홀수 switch 문법으로 만들기
// const gugudanOddNum = () => {
//   for(let i = 1; i <= 9; i++) {
//     for(let j = 1; j <=9; j++) {
//       switch(i * j) {
//         case `${i * j % 2 === 1}` :
//           console.log(i * j);
//           break;
// }}}};

// while 문법으로 구구단 만들기
// let i = 1;

// while(i <= 9) {
//   let j = 1;

//   while(j <= 9) {
//     console.log(`${i} * ${j} = ${i * j}`)
//     j++;
//   }
//   i++;
// }

// Class 문법으로
//1. 구구단만들기
//2. 짝수 홀수찾는 함수만들기

// class Gugudan {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   gugudan() {
//     for(let i = 1; i <= 9; i++) {
//       for(let j = 1; j <= 9; j++) {
//         console.log(`${i} * ${j} = ${i * j}`);
//       }
//     }
//   }

//   check(a) {
//     if(a % 2 === 0) {
//       return true;
//     }else {
//       return false;
//     }
//   }
// }

// const gugudan = new Gugudan();

// if(gugudan.check(2)) {
//   console.log(`짝수 입니다.`)
// }else {
//   console.log(`홀수 입니다.`)
// }

/**
 * Calculator 라는 클래스를 만들고, 값을 5와 10을 가진 객체 생성.
 * add, subtract, multiple, divide라는 함수를 정의한다. ( 이 때, 매개변수는 2개 )
 * 함수 호출 결과를 받고, 사용자에게 값을 알려줍니다.
 * 실행예시 : 더하기 : 2
 */

// class Calculator {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }

//   add() {
//     return this.a + this.b;
//   }
//   subtract() {
//     return this.a - this.b;
//   }
//   multiply() {
//     return this.a * this.b;
//   }
//   divide () {
//     return this.a / this.b;
//   }
// }

// const result = new Calculator(100, 55);

// console.log(`+ = ${result.add()}`);
// console.log(`- = ${result.subtract()}`);
// console.log(`* = ${result.multiply()}`);
// console.log(`/ = ${result.divide()}`);

/**
 * Teacher 클래스를 만들어서
 * 점수 계산기를 만들어 보삼.
 * 기능 : 평균계산기(학생의 점수를 받아서 평균을 계산하는것임)
 *
 * Student클래스는 자신의 국어, 영어, 수학 점수를 가지고 있다.
 * 각각의 점수를 반환하는 함수를 가지고 있다.
 */

// class Students {
//   constructor(korean, english, math) {
//     this.korean = korean;
//     this.english = english;
//     this.math = math;
//   }

//   getKorean() {
//     return this.korean;
//   }
//   getEnglish() {
//     return this.english;
//   }
//   getMath() {
//     return this.math;
//   }
// }

// class Teacher {
//   constructor(Students) {}

//   avg() {
//     return (getKorean() + getEnglish() + getMath()) / 3;
//   }
// }

// const subject = new Students(50, 70, 90);

// const arr = [];

// const randomNum = (arr) => {
//   for (let i = 0; i < 100; i++) {
//     arr[i] = Math.floor(Math.random() * 100 + 1);
//   }
//   arr.sort((a, b) => a - b);
// };

// const game = () => {
//   for (let i = 0; i < arr.length; i++) {
//     let result = arr[i].toString();
//     let str = "";
//     for (let j = 0; j < result.length; j++) {
//       if (result.indexOf("3") || result.indexOf("6") || result.indexOf("9")) {
//         str += "짝";
//       } else {
//         str += result.charAt(j);
//       }
//     }
//     console.log(str);
//   }
// };
// randomNum(arr);
// game();

// for (let i = 0; i < 110; i++) {
//   let str = "" + (i + 1);
//   for (let j = 0; j < str.length; j++) {
//     if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
//       str = "짝";
//     }
//   }
//   console.log(str);
// }

// for (let i = 0; i <= 110; i++) {
//   let str = "" + (i + 1);
//   for (let j = 0; j < str.length; j++) {
//     if (str[j] == 3 || str[j] == 6 || str[j] == 9) {
//       str = "짝";
//     }
//   }
//   console.log(str);
// }

// function solution() {
//   let answer = [];
//   let arr = [1, 1, 3, 3, 0, 1, 1];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i - 1] !== arr[i]) {
//       answer.push(arr[i]);
//     }
//   }
//   return answer;
// }
// console.log(solution());

