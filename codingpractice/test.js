//1. Hello world.

console.log("Hello World!");

//2. A + B.

console.log(1 + 2);

//3. 사칙연산.

let a = 7;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//4. 두 수 비교하기.
{
let a = 5;
let b = 5;

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a == b) {
  console.log("=");
}
}
//5. 시험 성적.
{
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
}

//6. 구구단.
{
let a = 2;

for (let i = 1; i <= 9; i++) {
  console.log(" 2" + " x" + i + " =" + a * i);
}
}
console.clear();

{
  // 평균 구하기.
  let arr = [1, 3, 5, 6, 7, 8];
  let sum = arr.reduce((a, b) => a + b) / arr.length;

  console.log(sum);
}

{
  // 약수 구하기.
  let num = 8;

  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}

{
  // 토끼 그리기.
  console.log(`(\\_/)`);
  console.log(`(. . )`);
  console.log(`|\\ /|`);
}

{
  // 변수 다루기.
  let num = 1030;
  let str = "hello, ";

  num = num + 204;
  str = str + "elice!";
  console.log(num);
  console.log(str);
}

{
  // 값 입력 받기.
  // const rl = require('readline').createInterface({
  //   input: process.stdin,
  //   output: process.stdout
  // })

  // rl.on('line', (line) => {
  //   rl.close();
  // }).on('close', () => {

  // })
}

{
  // 음식 가격 계산하기.
  let korean = 7000;
  let chinese = 6000;
  let wetern = 8500;
  let dcKorean = korean - (korean * (10 / 100));
  let totalPrice = (dcKorean * 55) + (chinese * 43) + (wetern * 52);

  console.log(`한식 : ${korean}`);
  console.log(`중식 : ${chinese}`);
  console.log(`양식 : ${wetern}`);
  console.log(`할인된 한식 : ${dcKorean}`);
  console.log(`전체 예산 : ${totalPrice}`);
}

{
  // 화살표 함수.
  let elice = [
    'rabbit',
    'cheshire',
    'mad hatter',
    'heart queen'
  ];

  console.log(elice.map(e => e.length));
}

{
  // 과일 장수
  // 출력 예시 [ '사과', '오렌지', '딸기' ]
  let fruits = "사과 오렌지 딸기 콩 무"
  fruits = fruits.split(" ").map(item => item);

  fruits = fruits.filter(e => e !== "콩");
  fruits = fruits.filter(e => e !== "무");
  console.log(fruits);
}

{
  // 몫과 나머지 구하기.
  let num1 = 23781367;
  let num2 = 1754;
  
  let result = Math.floor(num1 / num2);
  let remain = num1 % num2;
  console.log(result);
  console.log(remain);
}

{
  // 용돈 압수.
  let money = '500원, 엘리스 토끼는 하루 용돈으로 500원. 단돈 500원을 받는다. 부모님이 주시는 500원. 하지만 잘못한 것이 있으면 500원을 받지 못한다.'

  let result = money.split("500원");
  console.log(result.length -1);
}

{
  // 훈민정음 인덱스 이어 붙이기.
  let hangul = ['나', '랏', '말', '싸', '미', '듕', '귁', '에', '달', '아', '문', '자', '와', '로', '서', '르', '사', '맛', '띠', '아', '니', '할',
          '쌔', '이', '런', '젼', '차', '로', '어', '린', '백', '셩', '이', '니', '르', '고', '져', '홀', '빼', '이', '셔', '도', '마', '참',
          '내', '제', '뜨', '들', '시', '러', '펴', '디', '못', '할', '노', '미', '하', '니', '라'];
  let save = hangul[0] + hangul[47] + hangul[23];
  console.log(save);
}

{
  // 충성! 입대를 명 받았습니다!.
  let soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];
  let count = 0;
  soldier.sort((a, b) => a - b);
  count = soldier.length;

  console.log(soldier);
  console.log(count);
}

{
  let words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

  words.splice(4, 2);
  words.splice(5, 3);

  let lyrics = words.join(" ");
  console.log(lyrics);

  let count = 0;
  for(let i = 0; i < lyrics.length; i++) {
    if(lyrics[i] === "p") {
      count++;
    }
  }
  console.log(count);
}

{
  // 비가 오는 날엔
  function solution (x) {
    let rain = x;

    if (rain >= 50) {
      console.log("우산을 챙긴다")
    } else {
      console.log("그냥 간다")
    }
  }
  solution(40);
}

{
  // 집에 가는 길.
  function solution (x) {
    let money = x;

    if (money >= 1000) {
      console.log("택시")
    } else if (money >= 500) {
      console.log("버스");
    } else if (money >= 300) {
      console.log("지하철");
    } else {
      console.log("도보");
    }
  }
  solution(100);
}

{
  // 조건에 맞는 암호.
  function solution (a, b, c, d) {
    if (a <= b && a == d && b > c && c < 6) {
      console.log(true);
    } else if (a == b && a == c && a == d) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
  solution(2, 2, 2, 2);
  solution(4, 6, 8, 3);
}

{
  // 약수 출력하기.
  function solution (a) {
    let num = a;
    let answer = [];

    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        answer.push(i);
      }
    }
    let result = "";

    for (let i = 0; i < answer.length; i++) {
      if (i == 10) {
        console.log(result);
        result = ""
      }
      result += answer[i] + " ";
    }
    console.log(result);
  }
  solution(120);
}

{
  // 3 6 9 Game
  function solution (a) {
    let num = a;
    for (let i = 1; i <= num; i++) {
      let str = (i + "");
      for (let j = 0; j < str.length; j++) {
        if (str[j] == "3" || str[j] == "6" || str[j] == "9") {
          str = "짝!";
        }
      }
      console.log(str);
    }
  }
  solution(30);
}

{
  // 숫자 출력.
  function solution (a) {
    let num = a;
    let str = "";

    for (let i = 1; i < num; i++) {
      str += (i + ", ");
    }
    str += num;
    console.log(str);
  }
}

{
  // 피보나치.
  function solution (x) {
    let num = x;
    let answer = [0];
    let a = 0;
    let b = 1;
    let result = 0;

    while (result < num) {
      result = a + b;
      answer.push(result);
      a = b;
      b = result;
    }
    console.log(answer);
  }
  solution(5);
}

{
  // 촉촉한 초코칩
  function solution (x) {
    let str = x;
    let answer = str.split("촉촉한 초코칩");
    console.log(answer.length -1);
  }
  solution("안 촉촉한 초코칩 나라에 살던 안 촉촉한 초코칩이 촉촉한 초코칩 나라의 촉촉한 초코칩을 보고 촉촉한 초코칩")
}

{
  // 노동요
  function solution (x) {
    let str = x;
    let answer = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        answer += "링디기디기"
        console.log(answer);
        answer = ""; // 줄바꿈
      } else if (str[i] == ".") {
        answer += "딩딩딩"
        console.log(answer);
        answer = "";
      } else {
        answer += "링딩동 "
      }
    }
    console.log(answer);
  }
  solution("나는 베짱이.");
}

{
  // 문자열은 빼달라구!.
  function solution (x) {
    let str = x;
    let answer = str.replace(/[^1-9]/g,"");
    console.log(answer);
  }
  solution('12#qWe34%asf@!45')
}

{
  // 할푼리

  let result = "";
  let safe = "할푼리";

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
}

{
  const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
  let sum = 0;

  for(let i = 0; i < fruits.length; i++) {
    fruits.filter((item) => item == "b" ? sum++ : sum);
  }
  console.log(sum);
}
