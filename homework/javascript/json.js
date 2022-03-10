/** 개념설명
 * client 와 server 가 어덯게 통신 할 수 있는지 정의한 것이 HTTP(Hypertext Transfer protocal) 입니다.
 * HTTP란 어덯게 Hypertext를 서로 주고 받을 수 있는지를 규약한 protocal에 하나이다.
 * client는 server에 request를 보내고 server는 client에 response 방식이다.
 * 서로 통신할때 사용하는 건 AJAX (Asynchronous JavaScript And XML)이다.
 * AJAX는 웹페이지에서 동적으로 서버에게 데이터를 주고 받을 수 있는 기술을 의미한다.
 * 대표적인 예로는 XHR(XMLHttpRequest)라는 오브젝트가 있다.
 * XML은 Html과 같은 MarkUp 언어중 하나이다.
 * 요즘은 XML보다 JSON(JavaScript Object Notation)언어로 데이터를 주고 받는다.
 * JSON은 Object와 똑같이 (key, value)로 이뤄져 있다
 * JSON을 설명하자면 1.데이터를 주고받을때 가장 간단한 포멧 2.텍스트를 기반한 가벼운 언어 3. 읽기도 편함
 * 4. key와 value로 이뤄짐 5. 데이터를 직렬화하고 데이터를 전송함 6. 프로그래밍 언어와 플랫폼에 상관없이 쓰임.
 */

// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key} value: ${value}`);
  return key === 'name' ? 'ellie' : value;
});
console.log(json);


// 2. JSON to Object
// parse(json)
console.clear();
josn = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key} value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());