//1. Hello world

console.log("Hello World!");

//2. A + B

console.log(1 + 2);

//3. 사칙연산

let a = 7;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//4. 두 수 비교하기

let a = 5;
let b = 5;

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("=");
}

//5. 시험 성적

let score = 100;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80 && score <= 89) {
  console.log("B");
} else if (score >= 70 && score <= 79) {
  console.log("C");
} else if (score >= 60 && score <= 69) {
  console.log("D");
} else if (score > 100) {
  console.log("Not");
} else {
  console.log("F");
}

//6. 구구단

let a = 2;

for (let i = 1; i <= 9; i++) {
  console.log(" 2" + " x" + i + " =" + a * i);
}
