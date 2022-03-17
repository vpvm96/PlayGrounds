let choco = "촉촉한 초코칩";
let test = "안 촉축한 초코칩은 맛있다 촉촉한 초코칩"

function solution () {
  let strLen = choco.length;
  let cnt = 0;

  for (let i = 0; i < test.length; i++) {
    if (test[i] == "촉") {
      let j = i;
      if (test.substring(j, strLen + j).length < test.length) {
        let comp = test.substring(j, strLen + j);
        if (comp === choco) {
          cnt++;
          console.log(cnt);
        }
      }
    }
  }
}
solution();