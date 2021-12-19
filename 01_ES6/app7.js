//Higher order functions
//1.Map
//2.Filter

//EX1 Map function

let array1 = [1,2,3,4,5];
//Make an array which contain double of every element in array1

let array2 = array1.map(function(ele)
{
    return ele * 2;
})
let array3 = array1.map(ele=> ele*2);

console.log(array3); //[2, 4, 6, 8, 10]

//EX1 Filter function
//Make an array which contain even number  in array

let array = [1,2,3,4,5,6,7];
let ret_arr= array.filter(function(ele)
{
    if (ele %2==0)
    {
        return ele;
    }
});
let ret_arr= array.filter((ele)=> ele %2==0);
 
console.log(ret_arr);

