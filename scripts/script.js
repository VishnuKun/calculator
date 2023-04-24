//variables for storing operator plus numbers
let operator;
let num1;
let num2;

//addition
function add(...args) {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        let item = args[i];
        sum += item;
    };
    return sum;
};
//subtract
function subtract(num1, num2) {
    return num1 - num2;
}
//multiply
function multiply(num1, num2) {
    return num1 * num2;
}
//divide
function divide(num1, num2) {
    return num1 / num2;
}
//takes operator plus two numbers
function operate(operator, num1, num2) {
    //perform arithmetic operation as per operator
}