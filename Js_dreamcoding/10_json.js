//HTTP
//Hypertext Transfer Protocol
//어떻게 hypertext를 주고받을지를 규정한 프로토콜의 하나
//client가 server에게 데이터 요청 (request)
//server는 client의 요청에 대한 response 한다.

//AJAX
//Asynchronous JavaScript And XML
//XHR XMLHttpRequest: 간단하게 서버에게 데이터 요청, 받을 수 있다.
//XML: html 같은 markup 언어의 하나
//서버와 데이터를 주고받을 때는 다양한 타입 데이터 사용 가능하다.

//XMLHttpRequest와 fetch()API 사용 가능하다
//XML 대신 요즘 JSON을 많이 사용한다.
//JSON(JavaScript Object Notation)
//simplest data interchange format
//lightweight text-based structure
//easy to read
//key-value pairs
//used for serialization and transmission of data between the network the network connection
//independent programming language and platform

//# JSON (JavaScript Object Notation)

// Javascript 객체 표기법 (Object {key:value})
// 가장 간단한 데이터 교환 형식
// 가벼운 텍스트 기반 구조
// 읽기 쉬움
// key-value 의 쌍으로 이루어져 있음
// 네트워크 연결 간 데이터 직렬화(serialize) 및 전송에 사용
// 독립적 인 프로그래밍 언어 및 플랫폼 (=프로그래밍 언어나 플랫폼에 상관 없이 쓸 수 있음)

// 거의 모든 언어가 JSON → Object(해당 언어의 문법에 맞춰서..), Object → JSON 으로 변환하는 것을 지원함

//JSON 공부 방향
//object를 어떻게 serialize(직렬화)해서 JSON으로 변환할 것인가?
//직렬화된 JSON을 어떻게 deserialize해서 objects로 다시 변환할지 

//1. Object to JSON
//stringfy(obj)
const rabbit = {
    name: `tori`,
    color:`white`,
    size: null,
    birthDate: new Date(),
    // symbol: Symbol(`id`), // JS에만 존재하는 data라서 serialize 되지 않는다
    // 객체 내부에 화살표 함수를 정의하면 this는 전역객체를 가리킴(window)
    // 아래의 함수 문법은 jump: function()과 같음
    jump() { // 함수는 object의 data가 아니기 때문에 serialize 되지 않는다
      console.log(`${this.name} can jump!`);
    }
  };

let json = JSON.stringify(true); // 불린값 
console.log(json);

json = JSON.stringify([`apple`, `banana`]); // 배열
console.log(json);

json = JSON.stringify(rabbit); // 객체
console.log(json);

json = JSON.stringify(rabbit, [`name`, `color`]); // 원하는 key의 값만 serialize 할 수 있음
console.log(json);

json = JSON.stringify(rabbit, (key, value) => { // 콜백함수 방법
//   console.log(`key: ${key}, value: ${value}`);
//   if (key === `name` ) {
//     return `ellie`;
//   } else {
//     return value
//   }
   return key === `name` ? `ellie` : value;
});
console.log(json);

//Overloading: 함수의 이름은 같으나, 어떤 변수를 몇개만큼 전달하는지에 따라 각각 다른 방식으로 호출 가능

//2. JSON to Object
//parse(json)

json = JSON.stringify(rabbit);
console.log(json);

// 여기서부터 보자
let obj = JSON.parse(json);
console.log(obj);
// obj.jump(); // > error : stringify 할 때, 함수는 serialize 되지 않아서 jump는 존재하지 않는 메서드임
// console.log(rabbit.birthDate.getDate()); // > 날짜 '일' 이 출력됨
// console.log(obj.birthDate.getDate()); // > error : serialize된 birthDate는 string 이기 때문에 당연히 getDate API가 호출 안됨

obj = JSON.parse(json, (key, value) => {
  // console.log(`key: ${key}, value: ${value}`);
  return key === `birthDate` ? new Date(value) : value;
});
console.log(obj);
console.log(obj.birthDate.getDate()); // > 날짜 '일' 이 출력됨 : 위에 콜백함수로 string을 JS의 API로 수정해서 deserialize 했기 때문에 잘 동작함