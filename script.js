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

let buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case '1':
                display.textContent = "1";
                break;
            case '2':
                display.textContent = "2";
                break;
            case '3':
                display.textContent = "3";
                break;
            case '4':
                display.textContent = "4";
                break;
            case '5':
                display.textContent = "5";
                break;
            case '6':
                display.textContent = "6";
                break;
            case '7':
                display.textContent = "7";
                break;
            case '8':
                display.textContent = "8";
                break;
            case '9':
                display.textContent = "9";
                break;
            case '0':
                display.textContent = "0";
                break;
            case 'equal':

                display.textContent = "=";
                break;
            case 'minus':
                display.textContent = "-";
                break;
            case 'plus':
                display.textContent = "+";
                break;
            case 'times':
                display.textContent = "x";
                break;
            case 'divide':
                display.textContent = "/";
                break;
            case 'clear':
                display.textContent = "";
                break;
        }
    }
);



