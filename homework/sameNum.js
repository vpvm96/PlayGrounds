// 1. 중복번호 없애기
//ex) arr = [1, 1, 3, 3, 0, 1, 1] -> return:[1, 3, 0, 1]
//    arr = [4, 4, 4, 3, 3] -> return:[4, 3]
//    Solutuion: Fill the function of solution

function solution(arr) {
    var answer = []
    return answer
}

function solution() {
    var answer = []
    var arr = [1, 1, 3, 3, 0, 1, 1]

    for (let i = 0; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            answer.push(arr[i])
        }
    }

    return answer
}
console.log(solution())

// 1 ~ 100까지 숫자중 홀수의 경우 "수" 짝수의 경우 "박"을 출력

function solution5(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) newArr.push(arr[i])
    }
    return newArr
}

console.log(solution5([1, 1, 3, 3, 0, 1, 1, 2, 1]))

const solution = () => {
    let answer = ""

    for (let i = 1; i < 100; i++) {
        if (i % 2 === 1) {
            answer += "수"
        } else {
            answer += "박"
        }
    }
    return answer
}

console.log(solution())
