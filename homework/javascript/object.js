// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionally.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value }; <- 중요! 오브젝트는 key와 value의 집합체이다.

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true; // 이런식으로 동적으로 추가 가능 하지만 너무 동적으로 코딩하는건 좋지않음.
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string 키는 무조건 스트링 타입으로.
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // retrun this;
}

// 5. in operator: property existence check (key in obj) 오브젝트 안에 키가 있는지 확인 할 수 있음
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for ...in vs for ...of 
// for(ket in obj)
console.clear();
for(key in ellie) {
  console.log(key);
}

// for(value of iterable)
const arr = [1, 2, 4, 5];
for(value of arr) {
  console.log(value);
}

// 7. Fun cloning
// Object.assing(dest, [obj1, obj2, obj3...])
const user = {name: 'ellie', age: 20};
const user2 = user;
console.log(user);

// old way
const user3 = {};
for(key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed, color);
console.log(mixed, size);