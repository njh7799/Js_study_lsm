'use strict';

//Array

//1. Declaration
const arr1=new Array();
const arr2=[1,2];

//2. Index position
const fruits =['apple','banana']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);

//3. Looping over an array
//print all fruits
console.clear();
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

for (let fruit of fruits){
    console.log(fruit);
}

//c. forEach
console.clear()
fruits.forEach((fruit) => console.log(fruit));
//forEach는 배열 안에 들어있는 vlaue들 마다 내가 전달한 function을 출력

//4. Addition, deletion, copy
//push: add an item to the end
fruits.push('strawberry','orange');
console.log(fruits);

//pop: remove an item from the end
const popped= fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('strawberry','lemon');
console.log(fruits);

//shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower than pop, push
//전체의 데이터를 움직여야 하기 때문

//splice: remove an item by index position
fruits.push('strawberry', 'orange', 'lemon');
console.log(fruits);
fruits.splice(1,1, 'apple', 'watermelon');
//erase one thing from index 1, and insert apple and watermelon 
console.log(fruits);

//combine two arrays
const fruits2=['quince', 'coconut'];
const newFruits = fruits.concat(fruits2); 
console.log(newFruits);

//5. Searching
//indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.indexOf('watermelon'));

//includes
console.log(fruits.includes('watermelon'));
console.log(fruits.includes('peanut'));
console.log(fruits.indexOf('peanut'));

//lastIndexOf
console.clear();
fruits.push('apple');
console.log(fruits);
console.log(fruits.indexOf('apple')); //첫번째 apple의 index
console.log(fruits.lastindexOf('apple')); //마지막 apple의 index


const array=new Array()
array.push('1','2','apple',3,4)
console.log(array);
console.log(typeof(array.toString()))

