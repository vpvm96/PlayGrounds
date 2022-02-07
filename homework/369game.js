// const arr = [];

// const game = (arr) => {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr.indexOf("3")=-1, arr.indexOf("6")=-1, arr.indexOf("9")=-1) {
//       console.log("짝");
//     }
//   }
// }
// game()

const game = () => {
  for(let i = 0; i < 100; i++) {
    let str = "" + (i + 1);
    for(let j = 0; j < str.length; j++) {
      if(str[j] == 3 || str[j] == 6 || str[j] == 9) {
        str = "짝";
      }
    }
    console.log(str);
  }
}
game();