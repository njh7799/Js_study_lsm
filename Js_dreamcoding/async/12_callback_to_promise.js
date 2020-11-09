'use strict';

//JavaScript is synchronous(동기적).
//Excute the code block in order after hoisting
//hoisting: var and function declatation move bottom to top


console.log('1');
setTimeout(()=> console.log('2'), 1000); //시간은 ms이므로 1000ms=1s setTimeout은 browser API
console.log('3');

//javascript에서 callback 함수는 다른 함수의 매개변수로 함수를 전달하고, 어떠한 이벤트가 발생한 후 매개변수로 전달한 함수가 다시 호출되는 것을 의미

//Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(()=>console.log('hello'));

//Asynchronous callback
function printWithDelay (print, timeout) {
    setTimeout(print,timeout);
}
printWithDelay(()=>console.log('async callback'), 2000);

//Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if (
                (id==='ellie' && password==='dream') ||
                (id='coder' && password==='academy')
            ) {
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if (user==='ellie'){
                onSuccess({name:'ellie', role:'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage=new UserStorage();
const id=prompt('enter your id');
const password=prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${user.role} role`)
            },
            error=>{console.log(error);}
        );
    },
    error=>{
        console.log(error);
    }
)