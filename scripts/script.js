//variables for storing operator plus numbers
let operator = "";
let num1 = "";
let num2 = "";
//access the display elements
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

//addition
function add(num1, num2) {
    return Math.round((num1 + num2)*100)/100;
};
//subtract
function subtract(num1, num2) {
    return Math.round((num1 - num2)*100)/100;;
};
//multiply
function multiply(num1, num2) {
    return Math.round((num1 * num2)*100)/100;;  
};
//divide
function divide(num1, num2) {
    if (num2 === 0) return "user error - replace user"
    else return Math.round((num1 / num2)*100)/100;;
};
//takes operator plus two numbers
function operate(operator, num1, num2) {
    //perform arithmetic operation as per operator
    //when operator is "+"
    if (operator === '+') return add(num1,num2);
    //when operator is "-"
    if (operator === '-') return subtract(num1,num2);
    //when operator is "x"
    if (operator === '×') return multiply(num1, num2);
    //when operator is "/"
    if (operator === "÷") return divide(num1, num2);
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
    if (decimalFlag === true) {
        //check if display contains an operator
        if (!Number(displayBox.textContent)) {
            //clear operator from the display
            displayBox.innerHTML = "";
            //add decimal to the box on click
            displayBox.innerHTML = ".";
            //change flags
            decimalFlag = false;
            numFlag = true;
            operatorFlag = true
            
        }
        //check if display contains a number or empty space
        else {
            //add decimal to the box on click
            displayValue = ".";
            displayBox.append(displayValue);
            //reset displayValue
            displayValue = "";
            //change flags
            decimalFlag = false;
            numFlag = true;
            operatorFlag = true
        }
    };
};

//populate the display when any button is clicked
function display(item) {
    //when number is clicked
    if (typeof item === "number") {
        //check if flag is true
        if (numFlag === true) {
            //if number length >= 10 continue
            if (displayBox.textContent.length <= 10) {
                //when display box contains "" or number or decimal
                if (displayBox.textContent.includes(".") || Number.isInteger(Number(displayBox.textContent)) || displayBox.textContent === "") {
                    //append item to the display
                    displayValue += item;
                    displayBox.append(displayValue);
                    //reset var
                    displayValue = ""
                }
                //when display contains operator
                else {
                    //clear displaybox
                    displayBox.textContent = "";
                    //append item to the display
                    displayValue += item;
                    displayBox.append(displayValue);
                }

            }
        };
    }
    //when an arithmetic operator is clicked
    if (typeof item === "string") {
        //check operator if true or not
        if (operatorFlag === true) {
            //if num1 != 0 && operator != null
            if (num1!=="" && operator!=="") {
                //set current screen number to num2
                num2 = parseFloat(displayBox.textContent);
                //operate
                let solution = operate(operator,num1,num2);
                //display solution on clicking operator
                displayBox.innerHTML = solution;
                //reset num variables
                num1 = solution;
                num2 = "";
                operator = "";
                solution = "";
                //change flags
                operatorFlag = true;
                numFlag = true;
                decimalFlag = true;
                equalFlag = true;
            }
            //when num1 == null && operator also null
            else {
                //save number to num1
                num1 = parseFloat(displayBox.textContent);
                //save operator
                operator = item;
                //append item to the displayValue
                displayValue = item;
                //show displayValue to on the displayBox
                displayBox.innerHTML = item;
                //check if num1 and operator is null or not
                
                //change flags 
                operatorFlag = true;
                decimalFlag = true;
                equalFlag = true;
                //reset displaybox
                displayValue = "";
                displayBox.append(displayValue);
            }
        };
    };
    //reset displayValue
    displayValue = "";
};

//return the solution
function equals() {
    //check if equal flag is true or not
    if (equalFlag === true) {
        //get num2 from display
        num2 = parseFloat(displayBox.innerHTML);
        //clear everything from the display
        displayBox.innerHTML = "";
        //perform operation
        let solution = operate(operator, num1, num2);
        //add the value to displayvalue then to box
        displayBox.textContent = solution;
        //change flags
        decimalFlag = true;
        operatorFlag = true;
        equalFlag = false;
        numFlag = true;
        operator = true;
        //reset variables
        displayValue = "";
        num1 = "";
        num2 = "";
    };
};