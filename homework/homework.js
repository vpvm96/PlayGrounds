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
//   divide() {
//     return this.a / this.b;
//   }
// }

// const result = new Calculator(5, 10);

// console.log(`+ :${result.add()}`);
// console.log(`- :${result.subtract()}`);
// console.log(`* :${result.multiply()}`);
// console.log(`/ :${result.divide()}`);
// console.log(`/ :${new Calculator(5, 10).add()}`);

/**
 * html 로 Calculator를 구현해보셈
 * javascript 활용
 * html -> event 를 활용해서 해보셈
 * 보너스 : 구구단 12단 버튼
 */

/**
 * Teacher 클래스를 만들어서
 * 점수 계산기를 만들어 보삼.
 * 기능 : 평균계산기(학생의 점수를 받아서 평균을 계산하는것임)
 * 
 * Student클래스는 자신의 국어, 영어, 수학 점수를 가지고 있다.
 * 각각의 점수를 반환하는 함수를 가지고 있다. 
 */


class Teacher {
  constructor(korean, english, math) {
    this.korean = korean;
    this.english = english;
    this.math = math;
  }

  calculator() {
    const result = (this.korean + this.english + this.math) /3
    return result;
  }
}

class Students {
  constructor(korean, english, math) {
    this.korean = korean;
    this.english = english;
    this.math = math;
  }

  getKorean() {
    return this.korean;
  }

  getEnglish () {
    return this.english;
  }

  getMath() {
    return this.math;
  }
}

const students = new Students(50, 70, 90);
const teacher = new Teacher(students.getKorean(), students.getEnglish(), students.getMath());

console.log(teacher.calculator())


// const gugudna = () => {
//   for(let i = 1; i <= 9; i++) {
//     for(let j = 1; j <= 9; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }

// gugudna();