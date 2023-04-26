//variables for storing operator plus numbers
let operator = "";
let num1 = 0;
let num2 = 0;

//storing everything that is currently on the display
let displayValue = "";

console.log(displayValue)

//calling functions after dom content is loaded only
window.addEventListener("DOMContentLoaded", (e) => {
    let btn = document.addEventListener("click" , (e) => {
    //get the id of the event target
    //display stuff
    //clear one element at a time when backspace is clicked 
    //clear everything on clicking AC
    //give the result plus stop further input adding to the display unless AC is clicked 
    });
    console.log(btn);
});

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
    if (operator === '+') return add(num1,num2);
    //when operator is "-"
    else if (operator === '-') return subtract(num1,num2);
    //when operator is "x"
    else if (operator === 'x') return multiply(num1, num2);
    //when operator is "/"
    else if (operator === "/") return divide(num1, num2);
    else return null;
};

//some more functions 

//clear everything from the display and reset values 
function allClear() {
    let display = document.querySelector("#display");
    display.innerHTML = "";
};
//backspace clear at one element at one time
function backspace() {
};
//adds decimal
function addDecimal() {
};

//populate the display when any button is clicked
function display(item) {
    //access the display element
    let display = document.querySelector("#display");
    //append the clicked item to the displayValue
    displayValue += item;
    //show displayValue on the display
    display.append(displayValue);
};

//return the solution
function equals() {
};

//check operator type
console.log()