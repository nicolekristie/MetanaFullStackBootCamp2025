// Challenge 1: “Bug Hunter Game”
// Description:

// Create a small JavaScript function (e.g., a function that adds two numbers, checks if a string is a palindrome, or 
// finds the maximum number in an array). Write unit tests for your function using Jest to cover normal cases, edge cases, 
// and possible errors. Introduce a bug into your code and modify your tests to catch it. Fix the bug and run your tests to verify everything works.

export function sum(num1, num2) {
    //add check to fix bug to handle non-numeric numbers

    if (typeof num1 === 'string' || typeof num2 ==='string'){
        throw new Error('Invalid value: Value must be a number.');
    } 
    return num1 + num2;


}




console.log(sum(4,4));
console.log(sum(10,5));
console.log(sum(0,8));
console.log(sum(-10,-8));
console.log(sum(-5, 3));
//Introduce a bug
console.log(sum('a', 5));

