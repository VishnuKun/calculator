//variables for storing operator plus numbers
let operator = "";
let num1 = 0;
let num2 = 0;
//access the display element
let displayBox = document.querySelector(".display");
//storing everything that is currently on the display
let displayValue = "";
//store solution
let solution;
//flags
let equalFlag = false;      //for equal 
let decimalFlag = true;     //for adding decimal
let operatorFlag = true;    //for operators
let numFlag = true;         //for numbers


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
    //set all flags to default 
    equalFlag = false;
    decimalFlag = true;
    operatorFlag = true;
    numFlag = true;

};
//backspace clear at one element at one time
function backSpace() {
    //access the text in the display box
    let elements = document.querySelector(".display");
    //convert it into array
    let elementsArray = elements.innerHTML.split('');
    //remove the last element 
    if (typeof parseFloat(elementsArray[elementsArray.length-1]) === 'number') elementsArray.pop();
    //re-split or join it back together
    let processed = elementsArray.join('');
    //reset the displaybox to empty
    displayBox.innerHTML = "";
    //insert processed content into displayValue
    displayValue = processed;
    //insert the new text content into the displaybox
    displayBox.append(displayValue);
    //reset displayvalue
    displayValue = "";
    //change operator flags
    operatorFlag = true;

};
//adds decimal
function addDecimal() {
    //check if the flag is true or not
    if (decimalFlag === true && numFlag === true) {
        //add decimal to the box on click
        displayValue = ".";
        displayBox.append(displayValue);
        //reset displayValue
        displayValue = "";
        //change flags
        decimalFlag = false;
        numFlag = false;
    };
};

//populate the display when any button is clicked
function display(item) {
    //check if numflag is true or not
    if (numFlag === true) {
        //when a number is clicked
        if (typeof item === "number") {
            //append the clicked item to the displayValue
            displayValue += item;
            //show displayValue on the display
            displayBox.append(displayValue);
            //change flags 
            operatorFlag = true;
            decimalFlag = true;
            equalFlag = true;
        };
    };
    //when an arithmetic operator is clicked
    if (typeof item === "string") {
        //check operator if true or not
        if (operatorFlag === true) {
            //save number to num1
            num1 = parseFloat(displayBox.innerHTML);
            console.log(num1);
            //save operator
            operator = item;
            //append item to the displayValue
            displayValue += item;
            //show displayValue to on the displayBox
            displayBox.innerHTML = displayValue;
            //change flags 
            operatorFlag = false;
            decimalFlag = true;
            equalFlag = true;
        };
    };
    //reset displayValue
    displayValue = "";
};

//return the solution
function equals() {
    //check if equal flag is true or not
    if (equalFlag === true) {
        //clear everything from the display
        displayBox.innerHTML = "";
        //perform operation
        solution = operate(operator, num1, num2);
        //add the value to displayvalue then to box
        displayValue += solution;
        displayBox.append(displayValue);
        //change flags
        decimalFlag = false;
        operatorFlag = false;
        equalFlag = false;
        numFlag = false;
        //reset variables
        displayValue = "";
        num1 = 0;
        num2 = 0;
        operator = true;
    };
};

//testing