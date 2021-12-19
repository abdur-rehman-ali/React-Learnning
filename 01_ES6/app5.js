//Destructing

//EX1 Array destruction

let cars = ['BMW','Audi','KIA']
// let [car1,car2,car3] = cars;
let [car1,,car3] = cars;
console.log(car1);
console.log(car3);

//EX2 object destruction

let person ={
    name:'Ali joiya',
    age:20
}

let {name,age} = person;
console.log(name);
console.log(age);