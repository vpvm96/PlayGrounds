// Q1. make a string out of an array.
{
  const fruits = ['apple', 'banana', 'orange'];
  const result1 = fruits.toString(); // String으로 변환하는 방법1.
  const result2 = fruits.join(' and '); // String으로 변환하는 방법2.
  console.log(result1);
  console.log(result2);
}
// Q2. make an array out of a string.
{
  const fruits = '🍎,🥝,🍌,🍒';
  const result = fruits.split(','); // Array로 변환하는 방법1. 구분자(',') 를 꼭 전달해 줘야 함 
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // 배열안에 있는 아이템 순서를 거꾸로 만들어 줌 (배열 자체를 바꿔서 주의해야 함)
  console.log(result);
  console.log(array); // 기존에 있던 배열도 순서가 거꾸로 바뀜(주의)
}

// Q4. make new array without the first two elements.
{
  const array = [1, 2, 3, 4, 5];
  // const result1 = array.splice(0, 2); 기존 배열도 바꾸기 때문에 주의해서 사용해야 함
  const result2 = array.slice(2, 5); // 마지닥 end 는 배제되기에 +1 해줘야 함 기존 배열을 해지지 않고 복사함
  // console.log(result1);
  console.log(result2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the socre 90
{ // true가 되면 리턴하고 끝내기 때문에 중복검사가 힘듬 특정아이템을 찾기 좋음
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{  // value가 true인 아이템만 전달함 중복검사하기 좋음 특정 아이템을 찾기 힘듬
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the student' score result should be: [45, 80, 90, 66, 88]
{ // 배열안에 들어있는 모든 요소를 전달해준 콜배함수로 전달하면서 새로운 값을 전달하고 배열을 만들어 반환한다.
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{ // 특정 배열에 아이템중 하나라도 조건에 맞는게 있다면 true를 리턴함 없다면 false를 리턴
  console.clear();
  const result = students.some((student) => student.score < 50 );
  console.log(result);
   // 특정 배열에 아이템이 모두 조건에 맞는게 있다면 true 없다면 false를 리턴함
  const result2 = !students.every((student) => student.score >= 50 );
  console.log(result2);
}

// Q9. compute students' average score
{  // reduce 는 순차적으로 reduceRight 는 역순으로 더함
   // 배열에 있는 모든 요소들의 값을 누적하는 뭔가 함께 모아놓을때 쓰는 것
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
  .map((student) => student.score)
  .filter((score) => score >= 50)
  .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students.map((student) => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}
