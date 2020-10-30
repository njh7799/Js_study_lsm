# Function

1. # Function declaration

- function name(param1, param2) { body... return;}
- one function === one thig
- naming: doSomething, command, verb
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS

```javascript
function printHello() {
  console.log("Hello");
}
printHello();

function log(mes) {
  console.log(mes);
}
log("Hello@");
log(1234);
```

2. # Parameters

- premitive parameters: passed by value
- object parameters: passed by reference

```javascript
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);
```

3. # Default parameters (added in ES6)

```javascript
function showMessage(message, from = "unknown") {
  console.log("${message} by ${from}");
}
showMessage("Hi!");
//from's defualt value is unknown
```

4. # Rest parameters (added in ES6)

```javascript
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");
```

5. # Local scope

```javascript
let globalMessage = "global"; //global variable
function printMessage() {
  let message = "hello";
  console.log(message); //local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = "hello";
  }
  console.log(childMessage);
}
printMessage();
//We can see outside from inside. But we can't see inside from outside
```

# 6. Return a value

```javascript
function sum(a, b) {
  return a + b;
}
//만약 함수에 return이 없다면 그것은 return undefined를 포함하고 있는 것과 같다.
```

# 7. Early return, early exit

```javascript
//return을 조건 맞지 않을 경우에 먼저 빼놓고, 조건 맞는 경우에 log upgrade logic을 배치하라.
```

First-class function
functions are treated like any other variable
can be assigned as a value to variable
can be passed as an argument to other functions
can be returned by another function

1. # Function expression

- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.

```javascript
const print = function () {
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));
//함수가 선언 이전에 호출되어도 JS는 함수의 선언을 bottom to top으로 이동시키기 때문에 잘 작동한다.
```

2. # Callback function using function expression

```javascript
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  //anonymous function
  console.log("yes!");
};
//named function
//better debugging in debugger's stack traces
//recursions

const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);
```

# Arrow function

always anonymous

```javascript
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint!");
const add = (a, b) => a + b; //return value
```

# IIFE: Immediately Invoked Function Expression

```javascript
(function hello() {
  console.log("IIFE");
})();
//function을 괄호로 묶고 또 ()를 배치해주면 바로 실행된다.
```
