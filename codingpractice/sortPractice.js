let arr = [8, 3, 10, 11, 1, 5, 2, 99, 81, 100];
// 오름차순, 내림차순 정렬 (숙제)
//bubble sort
const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let swap;
      if (arr[j] < arr[i]) {
        swap = arr[j];
        arr[j] = arr[i];
        arr[i] = swap;
      }
    }
  }
  return arr;
};
sort(arr);
console.log(arr);
