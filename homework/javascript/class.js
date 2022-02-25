// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor 생성자
  constructor(name, age) {
    // field
    this.name = name;
    this.age = age;
  }
  // methods
  speek() {
    console.log(`${this.name}: hello!`);
  }
}
Person.prototype.show = function() { console.log('gd'); }
console.log(Person.prototype.show())
const ellie = new Person('ellie', 20);
console.log(ellie)

console.log(`이름:${ellie.name} 나이:${ellie.age}`);
ellie.speek();

// 2. Getter and Setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher); 
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `Triangle color: ${this.color}`;
  }
}

class Rectangle extends Shape {}  
class Triangle extends Shape {
  draw() {
    super.draw(); // super를 사용하면 이미 정의돼있는 부모의 메소드도 같이 호출됨.
    console.log('🔺');
  }
  getArea() { // 부모의 정의된 메소드를 자식 메소드에서 오버라이딩해서 사용가능.
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());
