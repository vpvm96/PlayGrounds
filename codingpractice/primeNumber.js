// ArrayList<Integer> arr = new ArrayList<>();
// arr.add(1);, arr.get(0)
// LinkedList<Integer> arr = new LinkedList<>();
// Tree, 완전탐색, DFS

{
  // 소수 출력하기 
  function isPrime(n) {
    var divisor = 2;
    while (n > divisor) {
      if (n % divisor === 0) {
        return false;
      } else {
        divisor++;
      }
    } if(n === 1) return false; 
    return true;
  }

  console.log(isPrime(9));
}

// const print = () => {
//   if (end == 10) {
//     return;
//   }
//   console.log("Hi");
//   end++;
//   print();
// };

// print();

// 재귀함수로 피보나치 수 구현. 10번째 까지 (숙제)
