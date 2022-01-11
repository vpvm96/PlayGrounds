// 1. use strict 사용하기
// ECMAScript5 에 추가되어있어서 비상식적인것이 안써짐
// 순수 바닐라 자바스크립때는 선언하는게 좋음
"use strict";

// 2. 변수 Variable
// let (added in ES6, mutable 데이터 타입)
let globalName = "globar name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (절대로 쓰면안됨)
// var hoisting (어디에 선언했냐에 상관없이 항상 제일위로 선언을 끌어올려줌)
// 블럭을 무시함
{
  age = 4;
  var age;
}
console.log(age);

// 3.Constants (Imutable 데이터 타입)
// 웬만하면 할당하면 값이 변경되지 않는 데이터타입을 사용해라 그 이유는 :
// - Security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value${helloBob}, type: ${typeof helloBob}`);

//boolean
// false: 0;, null, udefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1