// 1. 랜덤숫자 초기화 -> 1000개 (1 ~ 50)
// 그 중에서 10보다 작은 수의 갯수를 출력. 예)1, 2, 3, 4, 5, 6, 7, 8, 9.... ~, 20
// 결과: 10보다 작은 수의 갯수 : 10개 입니다.

// const randomNum = Math.random() * 50
// const randomNumfloor = Math.floor(randomNum + 1)

// console.log(randomNumfloor) // 랜덤숫자 출력
// --------------------------------------------------------------------------------------------
// const randomArr = [];
// for (i = 0; i < 10; i++) {
//     let randomNum = Math.floor(Math.random() * 51) + 1;
// }
// ---------------------------------------------------------------------------------------------
// while (randomArr.length < 10) {  // 배열을 10개 줌
//     const random = Math.floor(Math.random() * 51) + 1;  // 랜덤숫자 1~50까지 출력//error
//     if (randomArr.indexOf(random) === -1){  // 중복숫자 제외
//         randomArr.push(random);
//     }if (i = 0; i < 10; i++)
// }
// ----------------------------------------------------------------------------------------------
const randomArr = [];

const randomNum = (randomArr) => {
  for (let i = 0; i < 1000; i++) {
    randomArr[i] = Math.floor(Math.random() * 50 + 1);
  }
  randomArr.sort((a, b) => a - b);
};

const count = (randomArr) => {
  let cnt = 0;
  for (let i = 0; i < randomArr.length; i++) {
    if (randomArr[i] < 10) {
      cnt++;
    }
  }
  console.log(`결과: 10보다 작은 수의 갯수 : ${cnt}개 입니다.`);
};

randomNum(randomArr);
count(randomArr);
// ---------------------------------------------------------------------------------------------
