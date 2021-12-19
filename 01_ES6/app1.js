//Arrow function

// EX1 (without argument)
function greeting()
{
    console.log('Welcome');
}

let greeting = () =>{
    console.log('Welcome');
}
greeting();

//EX2 (passing single arguments)
function greeting(nm)
{
    console.log('Welcome ' + nm);
}

let greeting = nm => console.log('Welcome' + nm);

greeting('ali');

//EX3 (passing single arguments and return value)
function greeting(nm)
{
     return 'Welcome ' + nm;
}

let greeting = nm => 'Welcome ' + nm;
console.log(greeting('ali'));

//EX4 (passing multiple arguments and return value)
let multiply = (num1,num2) => num1*num2;
console.log(multiply(4,5));