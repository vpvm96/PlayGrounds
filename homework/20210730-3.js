/**
 * a = 5, b = 3 두 수의 교환 1.
 * 1~10 까지 랜덤 -> 최대 최소 찾고 두 요소 교환. 2
 * 1~10 까지 랜덤 수 -> 정렬 .sort() 사용 x 3.
 */

// let a = 5;
// let b = 3;

// const changeNum = (a, b) => {
//     let num = a;
//     a = b;
//     b = num;
//     console.log(a + " " + b);   
// }
// changeNum(a, b)


const randomArr = [];

const randomNum = (randomArr) => {
    for (let i = 0; i < 10; i++) {
        randomArr[i] = Math.floor(Math.random() * 10 + 1); // 1~10까지의 랜덤숫자
    }
    console.log(randomArr);

    let max = randomArr[0];
    let maxIndex = 0;

    for (let i = 1; i < randomArr.length; i++) {  // 최대값 찾기
        if(max < randomArr[i]) {
            max = randomArr[i];
            maxIndex = i;
        }
    }

    let min = randomArr[0];
    let minIndex = 0;

    for (let i = 1; i < randomArr.length; i++) {  // 최소값 찾기
        if(min > randomArr[i]) {
            min = randomArr[i];
            minIndex = i;
        }
    }

    swap(maxIndex, minIndex, randomArr);
}

const swap = (a, b, randomArr) => {      // 배열 바꾸기 
    let swapNum = a;
    a = b;
    b = swapNum;
    console.log("바뀔 숫자는 : " + randomArr[a] + " " + randomArr[b]);
}
randomNum(randomArr);


// 모든 것을 함수화 하여 사용하는 법

// const randomArr = [];

// const randomNum = (randomArr) => {
//   for(let i = 0; i <= 10; i++) {
//     randomArr[i] = Math.floor(Math.random() * 10) + 1;
//   }
//   randomArr.sort((a, b) => a - b);
//   console.log(randomArr);
// }

// const maxNum = (randomArr) => {
//   let max = randomArr[0];
//   let maxIndex = 0;

//   for(let i = 1; i < randomArr.length; i++) {
//     if(max < randomArr[i]) {
//       max = randomArr[i];
//       maxIndex = i;
//     }
//   }
//   return max;
// }

// const minNum = (randomArr) => {
//   let min = randomArr[0];
//   let minIndex = 0;

//   for(let i = 1; i < randomArr.length; i++) {
//     if(min > randomArr[i]) {
//       min = randomArr[i];
//       minIndex = i;
//     }
//   }
//   return min;
// }

// const swapNum = (max, min) => {
//   let swap = max;
//   max = min;
//   min = swap;
//   console.log(`${max} 와 ${min}`);
// }

// randomNum(randomArr);
// swapNum(maxNum(randomArr), minNum(randomArr));

// 내장함수를 사용하여 작성하는 법.
// const randomArr = [];

// const randomNum = (randomArr) => {
//   for(let i = 0; i < 10; i++) {
//     randomArr[i] = Math.floor(Math.random() * 10) + 1;
//   }
//   max = Math.max(...randomArr);
//   min = Math.min(...randomArr);

//   let swap = max;
//   max = min;
//   min = swap;
//   console.log(`${max} 와 ${min}`);
// }

// randomNum(randomArr);