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

//JSON 공부 방향
//object를 어떻게 serialize(직렬화)해서 JSON으로 변환할 것인가?
//직렬화된 JSON을 어떻게 deserialize해서 object로 다시 변환할지

//1. Object to JSON
//stringfy(obj)
let json=JSON.stringify(true);
console.log(json);

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit={
    name:'tori',
    color:'white',
    size:'null',
    birthDate:new Date(),
    jump:()=> {
        console.log('${name} can jump!');
    },
}
json=JSON.stringify(rabbit)
console.log(json)

json=JSON.stringify(rabbit, ['name','color', 'size']);
console.log(json)

json=JSON.stringify(rabbit, (key, value) => {
    console.log('key: ${key}, value: ${value}');
    return key==='name' ? 'ellie': value;
});
console.log(json)

//Overloading: 함수의 이름은 같으나, 어떤 변수를 몇개만큼 전달하는지에 따라 각각 다른 방식으로 호출 가능

//2. JSON to Object
//parse(json)
console.clear();
json=JSON.stringify(rabbit);
console.log(json)
const obj=JSON.parse(json, (key, value) => {
    console.log('key: ${key}, value: ${value}');
    return key==='birthDate' ? new Date(value): value;
});
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

//JSON Diff
//JSON Beautifier
//JSON Parser
//JSON Validator