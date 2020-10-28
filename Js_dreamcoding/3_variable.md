# block과 globalName

```javascript
Block
{
이 안의 코드는 밖에서 보지 못합니다. 여기서 선언한 변수는 사용할 수 없습니다.
}

let globalName='globalName'
이렇게 하면 안,밖 상관 없이 다 쓸 수 있다.

```

# var, r/w (read and write)

```javascript
//var는 쓰지 말자
//변수 선언하고 값을 할당하는 것이 일반적
//age=4 한 다음 var age하는 것이 가능
//var hoisting
//어디에 선언했는지 상관없이 이것을 맨 위로 끌어올려주는 것
//var는 block에 구애받지 x 전역 사용 가능
//name=4 하고 let name하면 error
```

# constant, r(read only)

```javascript
const daysofweek = 5;
```

const는 값이 절대 안 바뀐다. 가리키고 있는 포인터가 고정<br>
immutable data type이다.
Immutable date types: premitive types, frozen objects (i.e. object.freeze())
Mutable data types: all objects by default are mutable in Js

- Advantage of immutable data type
  - security
  - thread safety
  - reduce human mistakes

# Variable types

primitive type: 더 이상 작은 단위로 나눠질 수 없는 single item<br>
ex) number, string, boolean, null, undefined, symbol
<br>
object, box container는 single item 들을 여러개 묶어서 한 단위로 관리할 수 있게 해 주는 것<br>
ex) function, first-class function

```javascript
let inf = 1 / 0;
let ninf = -1 / 0;
let nan = "dfg" / 2;
console.log(inf, ninf, nan);
//Infinity, -Infinity, NaN
```

bigInt type
숫자의 맨 마지막에 n이라고 붙인다.

# string

```javascript
const char = "c";
const name = "brendan";
const hi = "Hello";
console.log(char + name);
console.log("hi ${name}");
```

# boolean

```javascript
false: 0, null, undefined, NaN, ''
true: any other values
const canRead='true;
const test=3<1; //false
```

# null

```javascript
let nothing=null;
텅텅 비어있는 empty 값
```

# undefined

아무것도 결정된 바 없는 것. 비었는지 값이 지정되어있는지도 결정 X

```javascript
let x;
let y = undefined;
console.log(x, typeof x);
```

# symbol

create unique identifiers for objects
주어진 string이 같더라도 다르게 만듦

```javascript
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
False;
```

# Dynamic typing: dynamically typed language

선언할 때 type 지정하지 않고 프로그램이 동작할 때 지정된 값에 따라서 그 type이 부여된다.<br>

typescript: javascript 위에 type이 얹어진 것
