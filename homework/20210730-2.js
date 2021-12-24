// 1. 100개의 랜덤숫자를 만들고 모든 요소의 합을 구하시오.
const randomArr = [];

const randomNum = (randomArr) => { // 100개의 랜덤숫자 함수
    for(let i = 0; i < 100; i++) {
        randomArr[i] = Math.floor(Math.random() * 100);
    }      
    console.log(randomArr);
}

const add = (randomArr) => { // 모든 요소의 합 함수
    let num = 0;

    for(let i = 0; i < randomArr.length; i++) {
        num += randomArr[i];
    }
    

    return num;
}

console.log(add(randomArr));