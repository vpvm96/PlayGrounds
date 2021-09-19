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