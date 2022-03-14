// 2. 접두사 찾기.
// directory 배열이 있음. 여기는 phone_number가 담김.
// directory: [123-1111, 1234-1234, 12344-9123, 111-1234]
// 접두사란 1번 배열의 값과 2번배열의 값 즉 123-1111은 1234-1234의 접두사임.
// directory 배열 내에 만약 접두사가 없다면 true를 있으면 false를 반환

// let directory = ['123-1111', '1234-1234', '12344-9123', '111-1234']
let directory = ['123-1111', '13556-1264', '16992-9123', '111-1225']

function solution(directory) {
  let answer = true;
  directory.sort((a, b) => a - b);

  for(let i = 0; i < directory.length -1; i++) {
    let num = directory[i + 1].substring(0, directory[i].length)
    if(num === directory[i]) {
      answer = false;
      break;
    }
  }
  return answer;
}

console.log(solution(directory));