{
/**1번 문제.
비가 오는 날엔
비가 오는 날 항상 우산을 챙길지 말지 고민하는 엘리스 토끼는 이제부터 일기예보를 보고 결정하기로 하였습니다.

일기예보에서 비가 올 확률이 50% 이상이면 우산을 챙기고 아니면 그냥 가기로 했습니다.

입력으로 비가 올 확률이 주어질 때, 엘리스가 취해야 할 행동을 출력해보세요.

입력 예시

100
Copy
출력 예시

우산을 챙긴다.
Copy
입력 예시 2

10
Copy
출력 예시 2

그냥 간다.
Copy

지시사항
비가 올 확률을 입력받습니다.
비가 올 확률이 50% 이상이면 우산을 챙긴다., 그렇지 않으면 그냥 간다.를 출력하세요.
Tips!
제시한 출력문을 정확히 출력해야 하는 것에 유의하세요.
 */
// 지시사항을 참고하여 코드를 작성하세요.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let rain = 0;

rl.on('line', function (rain) {
    if (rain >= 50) {
        console.log('우산을 챙긴다.')
    } else {
        console.log('그냥 간다.')
    }
  })
  .on('close', function () {
    console.log(line);
    process.exit();
});
}

{
/**2번 문제.
집에 가는 길
일을 끝낸 엘리스 토끼는 집으로 돌아가기 위해 대중교통을 이용하려고 합니다.
엘리스 토끼는 가진 돈에 따라 다른 교통수단을 이용할 예정입니다.
돈이 1,000원 이상이면 택시, 500원 이상이면 버스, 300원 이상이면 지하철을 이용할 예정이고 돈이 300원보다 없는 경우 도보를 이용해야 합니다.
엘리스 토끼가 가진 돈에 따라서 이용할 수 있는 가장 비싼 교통수단을 출력해보세요.

입력 예시 1

100
Copy
출력 예시 1

도보
Copy
입력 예시 2

500
Copy
출력 예시 2

버스
Copy

지시사항
조건에 따른 출력 결과를 택시, 버스, 지하철, 도보 중에서 정확히 출력하세요.
Tips
조건문을 이용하여 문제를 해결해보세요.
여러 조건을 적용하기 위해서는 else if와 else를 이용하여야 합니다.
 */
// 터미널에 엘리스 토끼가 가진 금액을 입력할 수 있으며 입력된 금액에 따라 결과를 출력합니다.
// 조건문을 이용해 문제를 해결할 수 있습니다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let money = 0;

rl.on('line', (line) => {
  money = line;
  rl.close();
}).on('close', () => {
  if (money >= 1000) {
    money = "택시";
  }else if (money >= 500) {
    money = "버스";
  }else if (money >= 300) {
    money = "지하철";
  }else {
    money = "도보";
  }
  console.log(money);
});
}

{
/** 3번 문제.
조건에 맞는 암호
엘리스는 다음과 같은 조건을 충족하는 암호를 만들려고 합니다.

아래의 1, 2, 3, 4의 조건을 동시에 충족하는 경우 
또는 5, 6, 7의 조건을 동시에 충족하는 경우 true를 아니라면 false를 출력합니다.

a는 b보다 작거나 같다.
a는 d와 같다.
b는 c보다 크다.
c는 6보다 작다.
a는 b와 같다.
a는 c와 같다.
a는 d와 같다.
엘리스를 도와 암호를 걸러내는 프로그램을 논리 연산자(and, or) 와 관계 연산자(>, <, <=, …) 를 이용해서 문제를 해결해보세요.

입력 예시

2 2 2 2
Copy
출력 예시

true
Copy
입력 예시 2

4 6 8 3
Copy
출력 예시 2

false
Copy

지시사항
1의 자리 숫자 4개를 공백을 기준으로 입력받으세요.
위의 1, 2, 3, 4의 조건을 동시에 충족하거나 5, 6, 7의 조건을 동시에 충족하는 경우 true를 아니라면 false를 출력합니다.
 */
// 지시사항을 참고하여 코드를 작성하세요.
function password (a, b, c, d) {
  let flag = true;
  
  if(a < b && a === d && b > c && c < 6) {
    flag = true;
  }else if (a === b && a === c && a === d) {
    flag = true;
  }else {
    flag = false;
  }
  return flag;
  }
  
  console.log(password(2, 2, 2, 2));
  console.log(password(4, 6, 8, 3));
}

{
/**4번 문제.
약수 출력하기
정수가 어떤 수로 나누어 떨어질 때, 이 수를 약수라고 합니다.

예를 들어 4의 약수는 1, 2, 4 입니다.

12의 약수는 1, 2, 3, 4, 6, 12 입니다.

어떤 한 수를 입력받았을 때, 해당 수의 약수들을 출력하는 코드를 짜봅시다.

입력 예제

120
Copy
출력 예제

1 2 3 4 5 6 8 10 12 15 
20 24 30 40 60 120 
Copy

지시사항
자연수 N(2 이상 100,000 이하)을 입력 받습니다.
한 줄에 10개의 약수씩 한 칸씩 띄워서 출력을 합니다. 즉, 약수를 출력함과 동시에 공백을 같이 넣어주면 됩니다.
 */
// 지시사항을 참고하여 코드를 작성하세요.

let num = 2;
let answer = [];
const readline = require("readline");
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
})

rl.on('line', function (line) {
  num = line;
  rl.close();
}).on('close', function () {
  solution();
  getResult();
  process.exit();
})

function solution () {
  for(let i = 1; i <= num; i++) {
    if(num % i === 0) {
        answer.push(i);
    }
  }
}
function getResult () {
let result = "";
for(let i = 0; i < answer.length; i++) {
  if(i == 10) {
    console.log(result)
    result = ""
  }
  result += answer[i] + " "
}
console.log(result);
}
}

{
/**5번 문제.
3, 6, 9 게임
엘리스 토끼는 친구와 3, 6, 9게임을 하기 위해 친구에게 규칙을 설명해 주었습니다.

하지만 친구가 규칙을 이해하지 못해서 직접 시범을 보여주려고 합니다.

1부터 30까지 3, 6, 9게임을 하는 프로그램을 작성해 봅시다.

3, 6, 9게임의 규칙은 다음과 같습니다.

1부터 차례대로 말한다.
숫자 3, 6, 9가 들어가는 수의 경우에는 짝!을 출력한다.
예시) 6, 19, 23, 35

지시사항
위 3, 6, 9게임의 규칙에 맞게 1부터 30까지 출력해 보세요.
한줄당 숫자 혹은 “짝!” 하나씩 출력하면 됩니다.
 */
// 반복문을 이용하여 3, 6, 9 게임을 만들어주세요!

let num = 30;

function game () {
  for(let i = 1; i <= num; i++) {
    let str = (i + "");
    let flag = false;
    for(let j = 0; j < str.length; j++) {
      if(str[j] == "3" || str[j] == "6" || str[j] == "9" ) {
        str = "짝!";
        flag =true;
        console.log(str);
      }
    }
    if (flag == false) {
      console.log(str);
    }
  }
}
game();
}

{
  /**6번문제.
   * 숫자 출력
숫자를 입력하면 1부터 해당 숫자까지 출력하는 코드를 작성해봅시다. 단, 출력할 때 각 숫자를 ,와 띄어쓰기로 각각 구분해 보세요.

입력 예시 1

1
Copy
출력 예시 1

1
Copy
입력 예시 2

3
Copy
출력 예시 2

1, 2, 3
Copy
입력 예시 3

5
Copy
출력 예시 3

1, 2, 3, 4, 5
Copy

지시사항
0보다 큰 정수를 입력받으세요.
1부터 해당 숫자까지 출력 예시처럼 출력해보세요.
Tips!
반복문을 이용해 문자열을 이어 붙이는 방법으로 해결이 가능합니다.
   */
// 지시사항을 참고하여 코드를 작성하세요.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
let num = 0;
rl.on('line', function(line) {
  num = line;
  rl.close();
}).on('close', function() {
let str = "";
  for(let i = 1; i < num; i++) {
    str += (i + ", ");
  }
  str += num;
  console.log(str);
})
}

{
  /**7번 문제
   * 피보나찌 수열 출력하기
피보나찌 수열은 첫째 및 둘째 항이 1이며 그 뒤의 모든 항은 바로 앞 두 항의 합인 수열입니다. 
처음 여섯 항은 각각 1, 1, 2, 3, 5, 8이다. 편의상 0번째 항을 0으로 두겠습니다.

여기서 저희는 0번째 항부터 세어 주겠습니다. 
어떤 수 n(자연수)을 입력받았을 때 피보나찌 수열 내 가장 큰 수가 n미만인 배열을 출력하는 문제입니다. 
어떤 파이썬 내용을 적용해야 할지를 고민하면 쉽게 풀릴 수 있습니다.

이 프로그램의 입력 예시와 출력 예시는 다음과 같습니다.

입력 예시 1

1
Copy
출력 예시 1

[0] 
Copy
입력 예시 2

5
Copy
출력 예시 2

[0, 1, 1, 2, 3] 
# 다음 항은 5인데 5미만이므로 해당되지 않음
Copy
지시사항 부분을 확인하면서 코딩해보세요!


지시사항
자연수를 입력받습니다.
n보다 작은 수들의 피보나찌 수열을 출력하세요. 피보나찌 수열의 첫 번째 항은 0, 두 번째 항은 1입니다.
Tips
피보나찌 수열을 구현하는 방법은 n번째 항을 위해선 n-1, n-2번째 항을 더해주는 방법입니다. 
이는 -1, -2 인덱스의 원소를 더하여 쉽게 구할 수 있습니다.
n보다 작은 수들의 피보나찌 수열들의 리스트들을 만들기 위해선 마지막 두 개 인덱스의 원소의 합이 n을 넘어가면 안 돼요!
반복문을 중간에 종료하기 위해서 break를 이용하세요.
   */
  // 지시사항을 참고하여 코드를 작성하세요.
let num = 0;
let input = [0];

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function(line) {
  num = line;
  rl.close();
}).on('close', function() {
  let a = 0;
  let b = 1;
  let result = 0;
  while(result < num) {
    result = a + b;
    input.push(result);
    a = b;
    b = result; 
  }
  console.log(input);
}); // 이건 틀림
}

{
/**8번 문제.
 * 촉촉한 초코칩
친구들과 모여 장기자랑을 하게 된 엘리스!

준비해왔던 비장의 초코칩 랩을 선보이려고 하는데요. 엘리스는 촉촉한 초코칩이라는 말로 라임을 맞추었다고 해요.

과연 이 랩에는 촉촉한 초코칩이라는 말이 몇 번이나 들어있을까요?

우리가 프로그램을 이용해서 세어보아요.

입력 예시 1

난 안 촉촉한 초코칩보다 촉촉한 초코칩이 좋기 때문에 촉촉한 초코칩을 사 먹을 거야
Copy
출력 예시 1

3
Copy
입력 예시 2

안 촉촉한 초코칩 나라에 살던 안 촉촉한 초코칩이 촉촉한 초코칩 나라의 촉촉한 초코칩을 보고 촉촉한 초코칩이 되고 싶어서
촉촉한 초코칩 나라에 갔는데 촉촉한 초코칩 나라의 문지기가 "넌 촉촉한 초코칩이 아니고 안 촉촉한 초코칩이니까 안 촉촉한 초코칩 나라에서 살아"라고 해서 안 촉촉한 초코칩은 촉촉한 초코칩이 되는 것을 포기하고 안 촉촉한 초코칩 나라로 돌아갔다네
Copy
출력 예시 2

13
Copy

지시사항
임의의 길이에 문자열을 입력받으세요.
직접 입력받은 문자열에 있는 촉촉한 초코칩의 횟수만 출력해 주세요.
Tips!
특정 문자열을 찾기 위해 정규 표현식을 이용하세요.
매칭되는 문자열이 0개이면 에러가 발생하기 때문에 조건문을 이용해 포함 여부를 확인해야 합니다.
문자열 내 특정 문자가 포함되는지를 확인하기 위해서는 문자열.includes(확인할 문자)를 사용하면 됩니다.
 */
// "촉촉한 초코칩"이 몇 번 나오는지 확인해봅시다.
let str = "";

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', function(line) {
  str = line;
  rl.close();
}).on('close', function() {
  // 안 촉촉한 초코칩은 맛있다 촉촉한 초코칩
  let answer = str.split('촉촉한 초코칩')
  console.log(answer.length - 1); 
})
}

{
/**9번 문제.
 * 노동요
‘링딩동 링딩동 링디기디기 딩딩딩’

수능금지곡, 노동요 등등 많은 이름으로 불리우는 링딩동이에요. 중독성이 강해서 붙여진 이름이죠.

세상에는 베짱이처럼 일하지 않고 노는 것만 좋아하는 사람들이 있어요. 그들을 위해 엘리스와 함께 마법을 부려 볼까 해요. 다음과 같이 말이죠!

마법의 규칙

공백()은 ‘링디기디기’와 줄바꿈(엔터)를 출력합니다
점 (.)은 ‘딩딩딩’과 줄바꿈(엔터)을 출력합니다.
공백과 점을 제외한 모든 글자는 ‘링딩동’과 띄어쓰기를 출력합니다.
입력 예시

나는 베짱이.
Copy
출력 예시

링딩동 링딩동 링디기디기
링딩동 링딩동 링딩동 딩딩딩
Copy

지시사항
한글로 된 임의의 길이의 문자열을 입력합니다.
마법의 규칙들이 적용된 문자열을 출력합니다. 베짱이도 일하게 만드는 노동요를 부르는 프로그램을 작성해 보세요.
 */
// 지시사항을 참고하여 코드를 작성하세요.
let str = "";
let answer = "";

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', (line) => {
  str = line;
  rl.close();
}).on('close', () => {
  for(let i = 0; i < str.length; i++) {
    if(str[i] == " ") {
      answer += "링디기디기"
      console.log(answer);
      answer = "";
    }else if (str[i] == ".") {
      answer += "딩딩딩"
      console.log(answer);
      answer = "";
    }else {
      answer += "링딩동 "
    }
  }
  console.log(answer);

})
}

{
/**10번 문제.
 * 타격왕이 될 거야
야구에서 타수는 선수가 공을 치기 위해 타석에 선 횟수이고 안타는 공을 잘 쳐서 출루한 횟수입니다.

타율은 안타를 타수로 나눈 비율로 만약 8타수 5안타라면 5/8 = 0.625로 야구에서는 6할 2푼 5리라고 읽습니다.

야구선수 엘리스 토끼는 타율이 가장 높은 선수에게 주어지는 상인 타격왕이 되고 싶어 합니다.

엘리스 토끼의 현재 타율은 16타수 6안타로 3할 7푼 5리입니다.

이후의 타수와 안타가 입력으로 주어질 때 엘리스 토끼의 타율을 할푼리로 출력해보세요.

단, 0.101 처럼 가운데 0이 들어가 있는 경우 0은 생략하여 1할 1리라고 출력하며 타율이0.3678 인 경우에는 소수점 넷째자리 이후는 버림을하여 3할 6푼 7리로 출력합니다.

입력 예시

3
2
Copy
출력 예시

4할
2푼
1리
Copy
입력 예시 2

5
2
Copy
출력 예시 2

3할
8푼
Copy

지시사항
0이상의 정수인 타수와 안타를 입력받으세요.
16타수 6안타인 상태에서 입력받은 타수와 안타를 더한 타율을 구하세요.
구한 타율을 할푼리로 출력하세요. 할푼리 아래의 소수점은 모두 버림하며 값이 0인 경우 생략합니다.
Tips!
두 줄에 걸쳐 입력을 받는 방법을 고민해보세요. 간단한 방법으로는 입력되는 line을 배열에 추가하여, 배열의 길이가 2가 되면 rl.close();를 하는 방법입니다.
 */

let result = "";
let safe = "할푼리"

function solution (a, b) {
  let num = Math.floor(b / a * 1000) + '';
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
  /**11번 문제.
   * 문자열은 빼달라구!
엘리스 토끼는 학교에서 과제를 하고 있었습니다. 엘리스 토끼 본인의 노트북이 망가져서 태블릿 PC로 작업을 하고 있는데, 화면이 너무 작아서 자꾸 오타가 나네요. 특히나 숫자를 치고 싶은데 자꾸 문자가 섞여서 쳐지는 바람에 과제 제출기한을 지났습니다. 이번 일을 계기로 엘리스 토끼는 다짐했어요.

‘문자와 숫자를 섞어서 치더라도 숫자만 나오게 하는 프로그램을 짜야겠다!’ 엘리스 토끼를 도와서 프로그램을 짜볼까요?

입력 예시

12qwe34asf45
Copy
출력 예시

123445
Copy
지시사항을 보며 코딩하러 가볼까요?


지시사항
문자열을 입력받으세요.
입력 받은 문자열에서 문자 또는 기호를 제외한 숫자만 추출해서 문자열 형태로 출력하는 프로그램을 짜주세요.
Tips!
유니 코드를 이용해서 풀면 쉽게 풀립니다. 문자열에서 숫자모양만 추출하기 위해선 아래와 같은 표를 이용하면 편합니다.
십진수	모양
48	0
49	1
50	2
51	3
52	4
53	5
54	6
55	7
56	8
57	9
string.charCodeAt(index)을 이용하면 문자열 내 index에 해당하는 문자의 유니 코드 값을 얻을 수 있습니다.
   */
  // 지시사항을 참고하여 코드를 작성하세요.
let str = "";

const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', (line) => {
  str = line;
  rl.close();
}).on('close', () => {
  let answer = str.replace(/[^0-9]/g,'');
  console.log(answer);
})
}

{
  /**12번 문제
   * 합격 여부 확인하기
   * 합격 여부 확인하기
시험 정보가 담긴 scores를 확인하고 시험에 합격했는지 확인해 봅시다.

지시사항을 따라 시험 결과를 출력해봅시다.


지시사항
세 과목의 점수를 각각 확인하고 점수가 40점보다 낮은 과목이 있으면 탈락입니다.
세 과목의 평균 점수가 60점보다 낮다면 탈락입니다.
세 과목의 점수가 각각 40점 이상이고, 평균이 60점 이상이라면 합격입니다.
시험에 합격했다면 pass, 탈락했다면 fail을 웹 화면에 출력하세요.
   */

var scores = {
  "kor": 55,
  "mat": 75,
  "eng": 50
}
let average = 0;
let result = "";

for(let key in scores) {
  average += (scores[key] / Object.keys(scores).length);
  if(scores[key] < 40 || average < 60) {
    result = "fail";
  } else if (scores[key] >= 40 && average >= 60) {
    result = "pass";
  }
}
console.log(result);
}

{
  /**13번 문제.
   * 짝수 판별기
1부터 100까지의 자연수 중에서 짝수만을 출력하는 짝수 판별기를 만들어봅시다.


지시사항
반복문과 조건문을 이용해 1이상 100이하의 숫자 중 짝수를 웹 화면에 출력해보세요. 단, 출력한 숫자들 사이에는 공백이 있어서는 안 됩니다.
실행 결과
출력 결과의 일부입니다.
   */
let answer = 0;

for(let i = 1; i <= 100; i++) {
  if(i % 2 === 0) {
    answer = i;
    document.write(answer);
  }
}
}

{
  /**14번 문제
   * 점심 메뉴 찾기
배열에 최근 먹은 음식들이 [점심, 저녁, 점심, 저녁, …] 순으로 들어가 있습니다.

지시사항을 따라 점심 메뉴만 화면에 출력하세요.


지시사항
배열의 길이를 출력하세요.
반복문을 사용해 모든 메뉴를 웹 화면에 출력해 보세요.
2에서 작성한 반복문을 수정해 점심 메뉴인 경우에만 출력하여 제출하세요.
실행 결과
%EC%BA%A1%EC%B2%982.JPG

Tips
변수명은 자유롭게 설정해도 됩니다.
   */
var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]
let answer = [];

document.write(foods.length);

for(let i = 0; i < foods.length; i++) {
  if(i % 2 === 0) {
    answer = foods[i];
    document.write(answer)
  }
}
}

{
  /**15번 문제.
   * B로 시작하는 과일을 찾아줘
주어진 배열 fruits에서 b로 시작하는 과일은 몇 개인지 구해봅시다.


지시사항
주어진 배열 fruits에서 b로 시작하는 과일은 몇 개인지 반복문과 조건문을 사용해 구하고
아래와 같이 웹 화면에 출력되도록 구해봅시다.
b로 시작하는 과일은 2개
Copy
Hint
indexOf는 문자열에서 찾고자하는 문자의 index 정보를 알 수 있는 메소드
b로 시작하는 과일은 b의 index가 0으로 시작하겠죠?
   */
const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; // b로 시작하는 과일의 개수를 저장하는 변수

for(let i = 0; i < fruits.length; i++) {
  if(fruits[i].indexOf('b') === 0) {
    sum++;
  }
}

document.write(`b로 시작하는 과일은 ${sum}개`);
/*지시사항을 따라 작성해주세요*/
}

{
  /**16번 문제.
   * 특정 학생 정보 바꾸기
학생들 중 elice라는 학생이 전과를 하게 되었습니다. elice의 전공 정보를 전과할 과의 이름으로 수정해봅시다.

학생들의 정보를 담고 있는 students객체를 수정하여 문제를 해결해봅시다.


지시사항
‘elice’ 라는 이름을 가진 학생을 찾아 기존 전공을 새로운 전공인 ‘computer science’ 로 바꿔주세요.

그리고 웹 화면에 students 정보를 아래 실행 결과와 같이 출력해 제대로 수정되었는지 확인해봅시다.

실행 결과
image
   */
  /*지시사항에 따라 작성해주세요.*/
const students = [
  {
      name: 'john',
      studentId: 2020123456,
      major: 'business'
  },
  {
      name: 'elice',
      studentId: 2015111111,
      major: 'statistics'
  },
  {
      name: 'jennifer',
      studentId: 2017000000,
      major: 'visual design'
  }
]

for(let i = 0; i < students.length; i++) {
  let answer = students[i].name
  if(answer === "elice") {
    students[i].major = 'computer science';
  }
  document.write(students[i].name +"'s " + "major: " + students[i].major + "<br/>")
}

/*1. elice를 찾아 전공을 'computer science'로 바꿔주세요.*/


/*2. 웹 화면에 students 정보를 출력해 제대로 수정되었는지 확인해보세요.*/
}