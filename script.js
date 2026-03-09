const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

let num1;
let operator;
let num2;

// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2){
    return operator(num1, num2);
}


