const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

let num1;
let operator;
let num2;

// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2){
    if (operator === "-") return subtract(num1, num2);
    else if (operator === "+") return add(num1, num2);
    else if (operator === "*") return multiply(num1, num2);
    else if (operator === "/") return divide(num1,num2);
}

let buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case '1':
                big.textContent += "1";
                small.textContent += "1";
                break;
            case '2':
                big.textContent += "2";
                small.textContent += "2";
                break;
            case '3':
                big.textContent += "3";
                small.textContent += "3";
                break;
            case '4':
                big.textContent += "4";
                small.textContent += "4";
                break;
            case '5':
                big.textContent += "5";
                small.textContent += "5";
                break;
            case '6':
                big.textContent += "6";
                small.textContent += "6";
                break;
            case '7':
                big.textContent += "7";
                small.textContent += "7";
                break;
            case '8':
                big.textContent += "8";
                small.textContent += "8";
                break;
            case '9':
                big.textContent += "9";
                small.textContent += "9";
                break;
            case '0':
                big.textContent += "0";
                small.textContent += "0";
                break;
            case 'equal':
                num2 = Number(big.textContent);
                let result = operate(operator, num1, num2).toString();
                big.textContent = result
                small.textContent += ` = ${result}`;
                equalFlag = true;
                break;
            case 'minus':
                num1 = Number(big.textContent);
                big.textContent = "";
                operator = "-";
                small.textContent = `${num1} - `;
                break;
            case 'plus':
                num1 = Number(big.textContent);
                big.textContent = "";
                operator = "+";
                small.textContent = `${num1} + `;
                break;
            case 'times':
                num1 = Number(big.textContent);
                big.textContent = "";
                operator = "*";
                small.textContent = `${num1} x `;
                break;
            case 'divide':
                num1 = Number(big.textContent);
                big.textContent = "";
                operator = "/";
                small.textContent = `${num1} / `;
                break;
            case 'clear':
                big.textContent = "";
                small.textContent = "";
                break;        
        }
    }
);



