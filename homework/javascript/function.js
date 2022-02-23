/** Function
 * - fundamental building block in the program
 * - subprogram can be used multiple items
 * - performs a task or calculates a value
 */

/**1. Function declaration
 * function name(param1, param2) { body... retrun; }
 * one function === one thing
 * naming: doSomething, commend, verb
 * e.g. createCardAndPoint -> createCard, createPoint
 * funtion is object in JS
 */
function printHello() {
  console.log('Hello');
}
printHello();

function log(msg) {
  console.log(msg);
}
log('Hello@');
log(123);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(msg, from = 'unKnown') {
  console.log(`${msg} by ${from}`);
}
showMessage('Hi');

// 4. Rest parameters (...pharams) 사용시 배열형태로 전달됨 (added ES6)
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for(const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'eliie');

// 5. Local scope // 밖에서는 안이 보이지 않고, 안에서만 밖이 보인다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); error 
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum ${sum(1, 2)}`);

// 7. Early return, early exit

// bad code
function upgradeUser(user) {
  if(user.point > 10) {
    // long upgreade logic...
  }
}

// good code
function ungradeUser(user) {
  if(user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

/**First-class funtion
 * funtions are treated like any other variable
 * can be assigned as a value to variable
 * can be passed as an argument to other functions.
 * can be returned by another function
 */

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when th excution reaches it.
const print = function () { // anonymous function 익명함수
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  }else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log('yes!');
}
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print () {
  console.log('no!');
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow Function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
}

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
}

// IIFE: Immediately Invoked Function Expression (잘 쓰이진 않지만 바로 함수를 호출하고 싶을 때 사용)
(function hello () {
  console.log('IIFE');
})

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multyply, remainder