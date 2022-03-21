{/** 1번 문제.
어서와~ 엘리스는 처음이지?
이번 시간부터는 여러 자바스크립트 기초 문제를 풀어보면서 자바스크립트 문법에 익숙해지는 시간을 가져보겠습니다.

워밍업으로 간단한 문제부터 풀어볼까요?

환영 인사를 위한 간단한 문장을 출력해봅시다.


지시사항
문자열 Welcome to Elice~를 출력해봅시다.
출력 예시

Welcome to Elice~
Copy
Tips!
console.log를 이용해 출력하세요. */

// 지시사항을 참고하여 코드를 작성하세요.

console.log("Welcome to Elice~");
}

{
  /**2번문제.
토끼 그리기
console.log를 이용해서 귀여운 토끼를 그려봅시다.

출력 예시

(\_/)
(. . )
|\ /|
Copy

지시사항
console.log를 이용해서 출력 예시대로 출력해보세요.
Tips
띄어쓰기에 유의해서 출력하세요.
역 슬래시(\)의 출력과 \n와 같은 이스케이프 시퀀스를 구분하기 위해서는 다음처럼 출력해야 합니다.
console.log("\\")
 */
// 지시사항을 참고하여 코드를 작성하세요.
console.log("(\\_/)")
console.log("(. . )");
console.log("|\\ /|");
}

{
  /**3번문제.
  변수 다루기
자바스크립트의 변수를 다뤄봅시다.

숫자 변수와 문자열 변수를 아래 지시사항에 따라 출력해보세요.


지시사항
num 변수에 204를 더하고 그 수를 num 변수에 저장해봅시다.
string 변수에 'elice!'를 더하고 그 문자열을 string 변수에 저장해봅시다.
num 변수와 string 변수를 차례대로 한 줄씩 출력해봅시다.
*/
// 숫자와 문자열이 들어 있는 변수입니다. 수정하지 마세요!
var num = 1030;
var string = 'hello, ';

num = num + 204;
string = string + "elice!";
console.log(num);
console.log(string);

// 지시사항을 참고하여 코드를 작성하세요.
}

{
/** 4번문제.
값 입력 받기
자바스크립트에서 콘솔을 통해 값을 입력 받기 위해서는 readline 모듈을 이용할 수 있습니다.

모듈은 아래와 같은 코드로 가져옵니다.

const readline = require("readline");
Copy
그리고 readline 모듈을 이용해 입출력을 위한 인터페이스 객체를 만듭니다.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
Copy
생성한 rl 변수는 아래와 같이 이용합니다.

  rl.on("line", (line) => { 
      // 한 줄씩 입력받은 후 실행할 코드
     // 입력된 값은 line에 저장된다.
      rl.close(); // close가 없으면 입력을 무한히 받는다.
  });
  rl.on('close', () => {
    // 입력이 끝난 후 실행할 코드
  })
Copy

지시사항
위의 설명을 참고하여, 입력 받은 값을 그대로 콘솔에 출력하는 코드를 작성하세요.
 */

// 지시사항을 참고하여 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    console.log(line)
    rl.close();
});

// rl.on('close', () => {
//     console.log(myInput);
// })
}

{
/**5번문제
음식 가격 계산하기
교장 선생님인 엘리스는 150명의 학생을 이끌고 수학여행을 가게 되었습니다.

목적지로 가는 길에 휴게소에서 밥을 먹으려고 합니다.

예산 조정을 위해 학생들이 메뉴를 미리 고르도록 하였습니다.

그 결과 한식(korean) 55명, 중식(chinese) 43명, 양식(western) 52명으로 나왔습니다.

한식은 7,000원, 중식은 6,000원, 양식은 8,500원일 때 전체 예산은 얼마가 필요할지 계산하세요.

단, 현재 휴게소에서는 한식 10% 할인 혜택을 주기 때문에 이를 고려해야 합니다.


지시사항
korean, chinese, western 변수에 가격을 넣어주세요.
discount_korean 변수에 할인된 한식의 가격을 저장하세요.
total_price 변수에 모든 학생이 고른 메뉴에 대한 전체 예산을 계산하여 저장하세요.
 */
// 한식 가격
var korean = 7000;

// 중식 가격
var chinese = 6000;

// 양식 가격
var western = 8500;

// 할인된 한식의 가격
var discount_korean = korean - (korean * (10 / 100));

// 전체 예산을 계산하여 저장해 보세요.
var total_price = (discount_korean * 55) + (chinese * 43) + (western * 52);

// 값을 확인해 보세요!
console.log("한식 : " + korean)
console.log("중식 : " + chinese)
console.log("양식 : " + western)
console.log("할인된 한식 : " + discount_korean)
console.log("전체 예산 : " + total_price)
}

{
/** 6번 문제.
화살표 함수
앞서 map()과 함께 사용되었던 화살표 함수에 대해 알아봅시다.

화살표 함수는 function 키워드 대신 =>을 이용해 함수를 간편하게 생성하는 방법입니다.

예를 들어 두 매개변수를 더하는 간단한 함수를 보겠습니다.

var f1 = function sum(x, y) {
    return x + y;
}

console.log(f1(1, 2));
Copy
이를 화살표 함수를 이용해 아래와 같이 간단하게 표현할 수 있습니다.

var f2 = (x, y) => x + y;

console.log(f2(1, 2));
Copy
리스트의 각 요소의 길이를 출력하는 코드를 화살표 함수를 이용해 변경해봅시다.


지시사항
map() 함수 내에 화살표 함수를 이용해 코드를 수정하세요.
 */
var elice = [
  'rabbit',
  'cheshire',
  'mad hatter',
  'heart queen'
];

// 화살표 함수를 이용해 변경해보세요.
console.log(elice.map((e) => e.length));
}

{
  /**7번문제.
  과일 장수
과일 장수 엘리스 토끼는 가게를 운영하던 중 이상한 점을 알아차렸습니다.

바로 과일이 아닌 채소를 판매하고 있던 것입니다.

fruits 변수에는 엘리스 토끼가 판매하는 것들이 배열에 담겨져 있습니다.

엘리스 토끼의 판매 목록에서 채소를 제거해주세요.

입력 예시

사과 오렌지 딸기 콩 무
Copy
출력 예시

[ '사과', '오렌지', '딸기' ]
Copy

지시사항
랜덤한 입력으로 만들어지는 과일이 담긴 배열 fruits에서 과일이 아닌 콩과 무를 제거해주세요.
Tips!
배열 내에 특정 값을 제거하기 위해서 filter를 이용할 수 있습니다.
filter를 이용해 특정 조건만 부합하는 요소를 모아 새로운 배열을 반환합니다. 예를 들어 아래와 같이 특정 요소를 제거할 수 있습니다.
배열.filter((element) => element !== '제거
   */
// 과일이 아닌 것을 잘 제거했는지 console.log를 통해 배열을 출력해 확인해봅니다.


// fruits = fruits.filter((element) => element !== '콩');
// fruits = fruits.filter((element) => element !== '무');

const readline = require("readline");
let fruits = [];
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (line) => {
    line.split(' ').map((el) => fruits.push(el));
    rl.close();
}).on("close", () => {
    fruits = fruits.filter((e) => e !== '콩');
    fruits = fruits.filter((e) => e !== '무');
    console.log(fruits)
})
}

{
/**8번문제.
몫과 나머지 구하기
몫 연산자와 나머지 연산자를 이용하여 숫자의 몫과 나머지를 구해봅시다.


지시사항
num1을 num2로 나눴을 때 몫과 나머지를 출력해봅시다.
Tips!
몫을 구하기 위해서 Math.floor()를 이용해 나눗셈 결과를 내림하세요.
 */
// num1과 num2입니다. 수정하지 마세요!
var num1 = 23781367;
var num2 = 1754;

let result = Math.floor(num1 / num2)
let remain = num1 % num2;
console.log(result);
console.log(remain);
// 지시사항을 참고하여 코드를 작성하세요.
}

{
/**9번문제.
한 번에 여러 입력받기
앞 선 실습에서 값을 입력 받고, 출력하는 방법을 배웠습니다.

이번에는 한 번에 여러 개의 입력을 받을 수 있는 split()에 대해 알아봅시다.

예를 들어 공백을 기준으로 두 숫자 100 200을 입력받기 위해서는 아래처럼 해주면 됩니다.

var input = []

rl.on("line", function (line) {
  input = line.split(' ');
  rl.close();
}).on("close", function () {
});
Copy
위와 같이 작성하는 경우 input 리스트에 공백을 기준으로 입력된 문자가 저장됩니다.

지시사항을 참고하여 아래처럼 세 개의 입력이 주어지는 문제를 해결해보세요.

입력 예시

100 200 300
Copy
출력 예시

100
200
300
Copy

지시사항
공백을 기준으로 세 개의 입력이 주어질 때, 세 개의 숫자를 리스트에 저장하세요.
저장된 리스트의 값을 한 줄에 하나씩 출력해보세요.
Tips!
만약 공백이 아닌 다른 문자를 기준으로 나누고 싶다면 split()의 매개변수로 넘겨주면 됩니다.
만약 콤마(,)를 기준으로 분리하여 입력받고 싶다면 아래처럼 해주면 됩니다.
input = line.split(',');
Copy
배열의 요소를 하나씩 출력하기 위해서는 input[0]처럼 인덱싱을 하면 됩니다.
 */
// 여러 입력을 받도록 코드를 작성하세요.
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = []

rl.on("line", function (line) {
  input = line.split(' ');
  rl.close();
}).on("close", function () {
    console.log(input[0]);
    console.log(input[1]);
    console.log(input[2]);
});
}

{
/**10번문제.
한 번에 여러 입력받기 2
앞에서 split()을 이용해 한 번에 여러 개의 입력을 받았습니다.

하지만 입력되는 것은 모두 문자열이기 때문에 숫자 연산을 할 수 없습니다.

숫자 연산을 하기 위해서는 입력을 int형으로 변환해줘야 하는데 이때 map() 함수를 사용할 수 있습니다.

line.split(' ').map((el) => parseInt(el));
Copy
위와 같은 식으로 작성하여 parseInt()로 모든 문자를 숫자로 변환합니다.

이를 참고하여 입력으로 int형 리스트가 주어질 때 리스트의 평균을 출력해보세요.

단, 평균이 소수라면 소수점 아래는 모두 버림 합니다.

입력 예시

100 200 300
Copy
출력 예시

200
Copy
입력 예시 2

16 25 72
Copy
출력 예시 2

37
Copy

지시사항
공백을 기준으로 입력되는 숫자를 리스트에 저장해보세요. 숫자는 3개씩 입력됩니다.
리스트의 모든 수에 대한 평균을 출력해봅시다. 단 소수점 아래는 모두 버림 합니다.
Tips
map()은 리스트의 요소를 지정된 함수로 처리해주는 함수입니다.
매개변수에는 각 요소에 적용할 함수를 넣어주면 됩니다.
 */
// 여러 숫자를 입력 받도록 코드를 작성하여, 입력된 숫자의 평균을 구하세요.

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list = [];
let num = 0;
rl.on("line", function (line) {
  list = line.split(' ').map((el) => parseInt(el));
  for(let i = 0; i < list.length; i++) {
    num += list[i] / list.length; 
  }
  rl.close();
}).on("close", function () {
    console.log(Math.floor(num));
});
}

{
/**11번문제.
용돈 압수
엘리스 토끼는 하루에 용돈 500원을 받습니다.

하지만 숙제를 안 하고 놀러 다닌 엘리스는 용돈을 받지 못하게 되었습니다.

money 문자열에서 "500원"을 기준으로 문자열을 나누어 리스트로 반환해봅시다.


지시사항
money 문자열에서 "500원"을 기준으로 나누어 배열 형태로 저장하세요.
저장한 배열을 출력하세요.
 */
// money 문자열입니다.
var money = '500원, 엘리스 토끼는 하루 용돈으로 500원. 단돈 500원을 받는다. 부모님이 주시는 500원. 하지만 잘못한 것이 있으면 500원을 받지 못한다.'

// 지시사항을 참고하여 코드를 작성하세요.

// 코딩테스트 => split(' ')
let result = money.split('500원');
console.log(result);
}

{
/**12번문제.

훈민정음
hangul 배열에는 훈민정음의 서문이 담겨있습니다.

인덱싱을 하여 단어 만들기 게임을 해봅시다.


지시사항
hangul 배열의 0번째 인덱스, 47번째 인덱스, 23번째 인덱스 순서대로 이어 붙여 단어를 만들고 출력해보세요.
 */
// 한글이 들어있는 배열입니다.
var hangul = ['나', '랏', '말', '싸', '미', '듕', '귁', '에', '달', '아', '문', '자', '와', '로', '서', '르', '사', '맛', '띠', '아', '니', '할',
          '쌔', '이', '런', '젼', '차', '로', '어', '린', '백', '셩', '이', '니', '르', '고', '져', '홀', '빼', '이', '셔', '도', '마', '참',
          '내', '제', '뜨', '들', '시', '러', '펴', '디', '못', '할', '노', '미', '하', '니', '라']
          

// 지시사항을 참고하여 코드를 작성하세요.

let save = hangul[0] + hangul[47] + hangul[23];
console.log(save);
}

{
/**13번 문제.
충성! 입대를 명 받았습니다!
1번부터 13번까지의 훈련병이 군대에 입대했습니다.

방금 막 입대해서 그런지 무엇을 해야 할지 몰라 어리둥절한 모습을 보입니다.

훈련병들을 순서대로 정렬하고 인원수가 맞는지 확인해볼까요?


지시사항
soldier 배열을 오름차순으로 정렬하세요.
soldier 배열의 길이를 count 변수에 저장하세요.
Tips!
배열 내 숫자를 그냥 sort()하는 경우 아스키 코드 기준으로 정렬이 되어, 정상적으로 정렬되지 않습니다.
sort() 내 아래 함수를 매개변수로 넣어, 오름차순으로 정렬할 수 있습니다.
function compareNumbers(a, b) {
    return a - b;
}
Copy
배열의 sort()와 관련하여 문서를 통해 자세히 알아보세요.
 */
// 훈련병들이 있는 배열입니다.
var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];

// 정렬된 배열과 길이를 구하세요.

var count = 0;
soldier.sort((a, b) => a - b);
count = soldier.length;

// 채점을 위한 코드입니다. 수정 하지 마세요!
console.log(soldier);
console.log(count);
}

{
/**14번 문제.
펜 파인애플 애플 펜
words 배열에 영어 단어들이 들어있습니다.

문자열/배열 함수를 이용해 문장을 한 번 만들어볼까요?


지시사항
words 배열에서 splice를 이용해 특정 값을 제거하여 아래와 같은 배열로 만드세요.
[ 'i', 'have', 'a', 'pen', 'pineapple', 'apple', 'pen' ]
Copy
join을 이용해서 공백을 기준으로 리스트를 연결하여 lyrics 변수에 문자열로 저장하세요.
lyrics를 출력하세요.
문자 'p'의 개수를 length 함수를 이용해서 출력하세요.
Tips!
splice()를 이용해 특정 인덱스의 원소를 제거할 수 있습니다. splice(4, 2)와 같이 작성하는 경우, 4번째 부터 2개의 원소를 제거한다는 의미입니다.
배열.join()로 배열의 원소를 이어 붙여 문자열로 만들 수 있습니다. 기본적으로는 콤마를 기준으로 이어 붙이지만, 매개변수에 ' '을 넣으면 공백을 기준으로 이어 붙입니다.
문자열에서 특정 문자의 개수를 세기 위해 match와 정규 표현식을 이용합니다. 문자열.match(/p/g)을 통해 p 문자 리스트를 얻을 수 있습니다. 해당 리스트의 길이가 p 문자의 개수입니다.
링크를 통해 정규 표현식에 대해 더 자세히 알아보세요.
 */
// 영어 단어가 들어있는 리스트입니다.
var words = ['i', 'have', 'a', 'pen', 'i', 'have', 'pineapple', 'i', 'have', 'an', 'apple', 'pen'];

// 지시사항을 참고하여 코드를 작성하세요.

words.splice(4,2);
words.splice(5,3);

let lyrics = words.join(' ');
console.log(lyrics);

let count = 0;
count = lyrics.match(/p/g).length;
// for(let i = 0; i < lyrics.length; i++) {
//     if(lyrics[i] === 'p') {
//         count++;
//     }
// }
console.log(count);
}

{
/**15번 문제.
한 번에 여러 입력받기 3
만약 여러 줄에 걸쳐서 입력을 받으려면 어떻게 해야 할까요?

바로 조건문을 이용하면 여러 줄을 입력 받을 수 있습니다. 자바스크립트에서 readline은 close()를 하기 전까지 계속해서 입력을 받게 됩니다.

그래서 값이 0인 숫자 변수를 하나 만들고, 입력을 받을 때마다 숫자에 1씩 더해줍니다. 그리고 원하는 줄 수 만큼 입력을 받았을 때, close()를 해주면 됩니다.

var count = 0;
rl.on("line", function (x) {
  count += 1;
  console.log(x);
    // count가 10이 되면, 즉 입력을 10번 받으면 입력이 종료됩니다.
  if (count === 10) {
    rl.close();
  }
}).on("close", function () {
  process.exit();
});
Copy
위 설명을 참고하여 첫 줄에 입력된 변수 N만큼의 문자를 N줄에 걸쳐 입력 받아 문자열로 출력하는 프로그램을 작성해봅니다.

입력 예시

3
a
b
c
Copy
출력 예시

abc
Copy
입력 예시2

5
e
l
i
c
e
Copy
출력 예시2

elice
Copy

지시사항
첫 번째 줄에 입력되는 정수 N을 입력 받으세요.
N줄에 걸쳐 입력되는 문자를 문자열에 저장하세요.
저장한 문자열을 출력하세요.
 */
// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let N = 0;
let input = [];

rl.on("line", function (x) {
  count += 1;
  if(count === 1) {
    N = x;
  } else {
    input.push(x)
  } if (count > N) {
    rl.close();
  }
}).on("close", function () {
  console.log(input.join(''));
  process.exit();
});
}