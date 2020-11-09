class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name=name;
        this.age=age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}
let sally=new Person('sally',12);
console.log(sally)