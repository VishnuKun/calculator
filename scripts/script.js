//variables for storing operator plus numbers
let operator = "";
let num1 = 0;
let num2 = 0;
//access the display element
let displayBox = document.querySelector(".display");
//storing everything that is currently on the display
let displayValue = "";
//store solution
let solution = null;
//flags
let equalFlag = false;
let decimalFlag = true;
let operatorFlag = true;

//calling functions after dom content is loaded only
window.addEventListener("DOMContentLoaded", (e) => {
    let btn = document.addEventListener("click" , (e) => {
        //get the id of the event target
        //display stuff
        //clear one element at a time when backspace is clicked 
        //clear everything on clicking AC
        //give the result plus stop further input adding to the display unless AC is clicked 
    });
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
    //changing 
    displayBox.innerHTML = "";
    //resetting variables
    displayValue = "";
    num1 = 0;
    num2 = 0;
    operator = "";
    solution = null;
};
//backspace clear at one element at one time
function backSpace() {
    //access the text in the display box
    let elements = document.querySelector(".display");
    //convert it into array
    let elementsArray = elements.innerHTML.split('');
    //remove the last element 
    elementsArray.pop();
    //re-split or join it back together
    let processed = elementsArray.join('');
    //reset the displaybox to empty
    displayBox.innerHTML = "";
    //insert processed content into displayValue
    displayValue = processed;
    //insert the new text content into the displaybox
    displayBox.append(displayValue);

};
//adds decimal
function addDecimal() {
    //access the right most element from the displayBox 
    //remove it from the displayBox
    //set displayBox = processedValue
};

//populate the display when any button is clicked
function display(item) {
    //when a number is clicked
    if (item !== NaN) {
        //change flags 
        operatorFlag = true;
        decimalFlag = true;
        equalFlag = true;
        //append the clicked item to the displayValue
        displayValue += item;
        //show displayValue on the display
        displayBox.append(displayValue);
    };
    //when an arithmetic operator is clicked
    
    //reset displayValue
    displayValue = "";
    //access the text in the box
    let content = document.querySelector(".display").innerHTML;
};

//return the solution
function equals() {
    solution = operate(operator, num1, num2);
    displayBox.append(solution);
};

//testing