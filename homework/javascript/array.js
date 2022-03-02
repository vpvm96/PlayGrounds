// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 가장 첫번째 인덱스를 찾을 때 사용
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]); // 가장 마지막 인덱스를 찾을 때 사용
console.clear();
// 3. looping over an array
// print all fruits
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits) {
  console.log(fruit);
}
// c. forEach
fruits.forEach((fruits) => console.log(fruits));

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('melon', 'mango');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the benigging
fruits.unshift('melon', 'mango');
console.log(fruits);
// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push('peach', 'lemon', 'grape');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, 'watermelon', 'tomato');
console.log(fruits);

// combine two arrays
const fruits2 = ['pear', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(fruits);
// indexOf: find the index
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));
console.log(fruits.indexOf('coconut'));

// includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('coconut'));

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.lastIndexOf('apple'));

