// 부족한 금액 계산하기
// 단 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면
// 원래 이용료의 N배를 받기로 하였습니다. 

let price = 100;
let money = 20;
let count = 5;

function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    // 카운트 만큼 for문을 사용하여 총 이용금액을 구하기
    result += price * i;
    // 가격 * 카운터 + result 한 값을 결과 값에 할당
  }

  if (result <= money) result = 0;
  // 금액이 부족하지 않아서 0을 리턴
  else result -= money;
  // 아닐경우 money - result 값을 결과 값에 할당

  return result;
}

console.log(solution(price, money, count));