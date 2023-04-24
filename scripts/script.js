//variables for storing operator plus numbers
let operator;
let num1;
let num2;

//addition
function add(num1, num2) {
    return num1 + num2;
};
//subtract
function subtract(num1, num2) {
    return num1 - num2;
};
//multiply
function multiply(num1, num2) {
    return num1 * num2;
};
//divide
function divide(num1, num2) {
    return num1 / num2;
};
//takes operator plus two numbers
function operate(operator, num1, num2) {
    //perform arithmetic operation as per operator
    //when operator is "+"
    if (operator === "+") return add(num1,num2);
    //when operator is "-"
    else if (operator === "-") return subtract(num1,num2);
    //when operator is "x"
    else if (operator === "x") return multiply(num1, num2);
    //when operator is "/"
    else if (operator === "/") return divide(num1, num2);
    else return null;
};

//some more functions 

//clear everything from the display and reset values 
function allClear() {
};
//backspace clear at one element at one time
function backspace() {
};
//adds decimal
function addDecimal() {
};

//display values plus solution at the display
function display() {
};

//return the solution
function equals() {
};