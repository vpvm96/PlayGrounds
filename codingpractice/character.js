// 3. 특정 가사 찾기
// 애국가 가사는 "동해물과 백두산이 마르고 닳도록. 하느님이 보우하사 우리 나라만세." 임.
// 여기서 단어 "이"가 몇 개 들어가는지 찾으셈.

let song = "동해물과 백두산이 마르고 닳도록. 하느님이 보우하사 우리 나라만세."

function solution(song) {
  let answer = 0;
  answer = song.split("이").length - 1;
  return answer;
}

console.log(solution(song));