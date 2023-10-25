let operator = "";
let num1 = "";
let num2 = "";
let displayBox = document.querySelector(".display");
let displayValue = "";
let solution;
let equalFlag = false;
let decimalFlag = true;
let operatorFlag = true;
let numFlag = true;

//addition
function add(num1, num2) {
    return Math.round((num1 + num2) * 100) / 100;
};
//subtract
function subtract(num1, num2) {
    return Math.round((num1 - num2) * 100) / 100;;
};
//multiply
function multiply(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;;
};
//divide
function divide(num1, num2) {
    if (num2 === 0) return "user error - replace user"
    else return Math.round((num1 / num2) * 100) / 100;;
};
//takes operator plus two numbers
function operate(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === '×') return multiply(num1, num2);
    if (operator === "÷") return divide(num1, num2);
};


//clear everything from the display and reset values 
function allClear() {
    //changing 
    displayBox.innerHTML = "";
    displayValue = "";
    num1 = 0;
    num2 = 0;
    operator = "";
    solution = null;
    equalFlag = false;
    decimalFlag = true;
    operatorFlag = true;
    numFlag = true;

};
//backspace clear at one element at one time
function backSpace() {
    let elements = document.querySelector(".display");
    let elementsArray = elements.innerHTML.split('');
    if (typeof parseFloat(elementsArray[elementsArray.length - 1]) === 'number') elementsArray.pop();
    let processed = elementsArray.join('');
    displayBox.innerHTML = "";
    displayValue = processed;
    displayBox.append(displayValue);
    displayValue = "";
    operatorFlag = true;

};
//adds decimal
function addDecimal() {
    if (decimalFlag === true) {
        if (!Number(displayBox.textContent)) {
            displayBox.innerHTML = "";
            displayBox.innerHTML = ".";
            decimalFlag = false;
            numFlag = true;
            operatorFlag = true

        }
        else {
            displayValue = ".";
            displayBox.append(displayValue);
            displayValue = "";
            decimalFlag = false;
            numFlag = true;
            operatorFlag = true
        }
    };
};

//populate the display when any button is clicked
function display(item) {
    if (typeof item === "number") {
        if (numFlag === true) {
            if (displayBox.textContent.length <= 10) {
                if (displayBox.textContent.includes(".") || Number.isInteger(Number(displayBox.textContent)) || displayBox.textContent === "") {
                    displayValue += item;
                    displayBox.append(displayValue);
                    displayValue = ""
                }
                else {
                    displayBox.textContent = "";
                    displayValue += item;
                    displayBox.append(displayValue);
                }

            }
        };
    }
    if (typeof item === "string") {
        if (operatorFlag === true) {
            if (num1 !== "" && operator !== "") {
                num2 = parseFloat(displayBox.textContent);
                let solution = operate(operator, num1, num2);
                displayBox.innerHTML = solution;
                num1 = solution;
                num2 = "";
                operator = "";
                solution = "";
                operatorFlag = true;
                numFlag = true;
                decimalFlag = true;
                equalFlag = true;
            }
            else {
                num1 = parseFloat(displayBox.textContent);
                operator = item;
                displayValue = item;
                displayBox.innerHTML = item;

                operatorFlag = true;
                decimalFlag = true;
                equalFlag = true;
                displayValue = "";
                displayBox.append(displayValue);
            }
        };
    };
    displayValue = "";
};

//return the solution
function equals() {
    if (equalFlag === true) {
        num2 = parseFloat(displayBox.innerHTML);
        displayBox.innerHTML = "";
        let solution = operate(operator, num1, num2);
        displayBox.textContent = solution;

        decimalFlag = true;
        operatorFlag = true;
        equalFlag = false;
        numFlag = true;
        operator = true;

        displayValue = "";
        num1 = "";
        num2 = "";
    };
};