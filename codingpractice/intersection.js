// 1. 실패한 선수
// 마라톤을 완주한 선수목록 배열 complete가 있음.
// complete : [Adam, John, Jenny]
// 마라톤을 참여한 선수목록 배열 player가 있음.
// player: [Adam, John, Jenny, Adele]
// 이 중에서 완주하지 못한 선수 배열 answer를구하고 반환.

// 차집합(Difference) ! 하나만 빼면 교집합(intersection)
{
let complete = ['Adam', 'John', 'Jenny'];
let player = ['Adam', 'John', 'Jenny', 'Adele'];

function solution(complete, player) {
  let answer = [];
  answer = player.filter(x => !complete.includes(x));
  return answer;
}

console.log(solution(complete, player));
}
// JSON.stringify 를 이용한 방법
{
  let complete = ['Adam', 'John', 'Jenny'];
  let player = ['Adam', 'John', 'Jenny', 'Adele'];

  function solution(complete, player) {
    let answer = [];

    answer = JSON.stringify(player) === JSON.stringify(complete);
  }

  console.log(solution(complete, player));
}

// {
// let complete = ['Adam', 'John', 'Jenny'];
// let player = ['Adam', 'John', 'Jenny', 'Adele'];

// function solution2(complete, player) {
//   let answer;
//   if(complete !== player) {
    
//   }
//   return answer;
// }

// console.log(solution2(complete, player));
// }