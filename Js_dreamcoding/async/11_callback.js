'use strict';

//JavaScript is synchronous(동기적).
//Excute the code block in order after hoisting
//hoisting: var and function declaration move bottom to top

console.log('1');
setTimeout(()=> console.log('2'), 1000); //시간은 ms이므로 1000ms=1s setTimeout은 browser API
console.log('3');

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

// 콜백 체인의 문제점

// 가독성이 안좋다
// 비즈니스 로직을 이해하기 힘듦
// 디버깅 할 때, 굉장히 어려움
// 유지보수 안좋음

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


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user=>{
        UserStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${user.name}, you have a ${user.role} role`)
            },
            error=>{console.log(error);}
        );
    },
    error=>{
        console.log(error);
    }
);