const add = (a,b) => {
    return a+b;
}

const subtract = (a,b) => {
    if(a>b){
        return a-b;
    } else {
        return b-a;
    }
}

const multiply = (a,b) => {
    return a*b;
}

// b가 0일 경우 사용자에게 나눌수 없는 값 입니다. 그 외에는 전부 계산
const divide = (a,b) => {
    if(b == 0){
        return "나눌수 없는 값";
    }else{
        return a/b;
    }
}
// 사각형 넒이 가로x세로  삼각형 밑변 x 높이 / 2
let base = 4;
let height = 8;

function triangle (base,height) {
    return base * height / 2;
}
console.log(triangle(base,height));

function square (base,height) {
    return base * height;
}
console.log(square(base,height))


const sq = (a) => {
    return a*a;
}

let a = 2;
let b = -11;
// console.log(divide(5,4))
// console.log(add(2,5))
// console.log(subtract(10,5))
// console.log(multiply(5,5))

console.log(multiply(add(a,b), subtract(a,b)));
console.log(divide(a,b));
console.log(sq(a));