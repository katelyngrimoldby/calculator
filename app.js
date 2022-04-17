//global vars
let displayNum = '';
let nonDisplayNum = '';
let currentOperator = '';
//end of global vars

//global query selectors
const display = document.querySelector('.display');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');
const calcBTN = document.querySelector('#calc');
const addBTN = document.querySelector('#add');
const subtractBTN = document.querySelector('#subtract');
const multiplyBTN = document.querySelector('#multiply');
const divideBTN = document.querySelector('#divide');
const clearBTN = document.querySelector('#clear');
//end of global query selectors

//display populators
one.addEventListener('click', () => {
inputValue('1')
});
two.addEventListener('click', () => {
inputValue('2')
});
three.addEventListener('click', () => {
inputValue('3')
});
four.addEventListener('click', () => {
inputValue('4')
});
five.addEventListener('click', () => {
inputValue('5')
});
six.addEventListener('click', () => {
inputValue('6')
});
seven.addEventListener('click', () => {
inputValue('7')
});
eight.addEventListener('click', () => {
inputValue('8')
});
nine.addEventListener('click', () => {
inputValue('9')
});
zero.addEventListener('click', () => {
inputValue('0')
});
decimal.addEventListener('click', () => {
inputValue('.')
});
//end of display populators

//operator listeners
addBTN.addEventListener('click', () => {
    if(currentOperator != '') {
        operate(currentOperator, displayNum, nonDisplayNum);
        currentOperator = 'add';
    } else {
        currentOperator = 'add';
    }
});
subtractBTN.addEventListener('click', () => {
    if(currentOperator != '') {
        operate(currentOperator, displayNum, nonDisplayNum);
        currentOperator = 'subtract';
    } else {
        currentOperator = 'subtract';
    }
});
multiplyBTN.addEventListener('click', () => {
    if(currentOperator != '') {
        operate(currentOperator, displayNum, nonDisplayNum);
        currentOperator = 'multiply';
    } else {
        currentOperator = 'multiply';
    }
});
divideBTN.addEventListener('click', () => {
    if(currentOperator != '') {
        operate(currentOperator, displayNum, nonDisplayNum);
        currentOperator = 'divide';
    } else {
        currentOperator = 'divide';
    }
});

//basic functions
function inputValue(value) {
    if(displayNum == result || display.textContent == 'OVERFLOW' || display.textContent == 'ERROR') {
        if(currentOperator == '') {
            clear();
            display.textContent = value;
            displayNum = value;
        }else {
            result = null;
            nonDisplayNum = displayNum;
            display.textContent = value;
            displayNum = value;
        }
    }else if(currentOperator != '') {
        nonDisplayNum = displayNum;
        display.textContent = value;
        displayNum = value;
    }else if([...displayNum].length > 12) {
       return;
    }else {
        if([...displayNum].includes('.') && value == '.') {
            return;
        }
        display.insertAdjacentText('beforeend', value);
        displayNum += value;
    }
}

function clear() {
    displayNum = '';
    nonDisplayNum = '';
    currentOperator = '';
    result = null;
    display.textContent = ''

}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if(b == 0) {
        return 'ERROR';
    }
    return a/b;
}
//end of basic functions

function operate(operator, a, b) {
    let result
    a = a*1
    b = b*1
    switch(operator) {
        case 'add':
            result = add(a, b);
            break;
        case 'subtract':
            result = subtract(a, b);
            break;
        case 'multiply':
            result = multiply(a, b);
            break;
        case 'divide':
            result = divide(a, b);
            break;
        default:
            return;
    }
    currentOperator = '';
    if(typeof result == 'number'){
        result = Math.round(result * 10) / 10;
        result = result.toString();
    }
    if([...result].length > 12) {
        display.textContent = 'OVERFLOW';
    } else {
        displayNum = result;
        display.textContent = displayNum;
    }

}

clearBTN.addEventListener('click', clear);