// 부족한 금액 계산하기

function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    // 카운트 만큼 for문을 사용하여 총 이용금액을 구하기
    result += price * i;
    // 가격 * 카운터 + result 한 값을 결과 값에 할당
  }

  if (result < money) result = 0;
  // 금액이 부족하지 않아서 0을 리턴
  else result -= money;
  // 아닐경우 money - result 값을 결과 값에 할당

  return result;
}
