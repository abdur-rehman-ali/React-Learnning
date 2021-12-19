//Reference and primitive types

// EX1 primitive types

// primitive type 
// 1.like pass by value
// 2. Value is copiee to assigned variable
// e.g. string and number

let num1 =20
let num2 = num1;
console.log(num1);
console.log(num2);

num2=30;
console.log(num1);
console.log(num2); 

// EX2 Object Reference types
// Reference type 
// 1.like passing by reference
// 2. both variable point to same location in memory
// e.g.arrys, objects

let person={
    name:'ali joiya',
    age:20
}

let person1 = person;
console.log(person);
console.log(person1);

person1.name = 'rimaan';
console.log(person);
console.log(person1);


// EX3 Arrray Reference types
let cars = ['BMW','Audi','Range Rover'];
let cars1 = cars;

console.log(cars);
console.log(cars1);

cars1[0] = 'MG';
console.log(cars);
console.log(cars1);