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
function subtract() {

}
//multiply
function multiply() {

}
//divide
function divide() {

}

//takes operator plus two numbers
function operate(operator, num1, num2) {
    //perform arithmetic operation as per operator
}