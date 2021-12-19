//Difference between let,const and var


// var: Redeclare(yes) and reassign(yes)

var nm = 'saad';
nm='ali';
var nm = 'roomie';
console.log(nm);

// let : reassign(yes)  redeclare (no)
let nm = 'saad';
nm='ali';
let nm = 'roomie'  // not allowed as nm is already declared
console.log(nm);

// const : reassign(no)  redeclare (no)
const nm = 'saad';
nm='ali';   // not allowed as it is assignment to const variable
const nm = 'roomie'  // not allowed as nm is already declared

let nm = 'ali'
console.log(nm);
