//Spread and rest operator

//Spread (used for making new array and object from other array and object)
//EX1 spreading of array 
let list = ['Haval','Kia sportage','MG'];
let newList = [...list,'BMW'];
console.log(newList);

//EX2 spreading of objects

let person ={
    nm :'ali',
    age:20,

}
let newPerson ={
    ...person,
    gender:'Male'
}

console.log(newPerson);

//EX3 rest operator (used for passing n number of arguments in function

function cars(...all)
{
    console.log(all);
}
cars('Haval','Kia sportage','MG')