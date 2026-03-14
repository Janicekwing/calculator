const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

let num1;
let operator;
let num2;
let evaluated = false;

// Create a new function operate that takes an operator and two numbers and then calls one of the above functions on the numbers.

function operate(operator, num1, num2){
    if (operator === "-") return subtract(num1, num2);
    else if (operator === "+") return add(num1, num2);
    else if (operator === "x") return multiply(num1, num2);
    else if (operator === "/") return divide(num1,num2);
}

function evaluate(str){
    let operators = [" / ", " x ", " + ", " - "];
    let ret = str;
    for (let i = 0; i < operators.length; i++){
        const operator = operators[i];
        let str_i = str.indexOf(operator);
        
        if (str_i != -1){
            let operator = str.substring(str_i+1, str_i+2);
            let num1 = Number(str.substring(0,str_i));
            if (str.includes(" =")) {
                const equal_i = str.indexOf(" =");
                let num2 = Number(str.substring(str_i+3, equal_i));
                ret = String(operate(operator, num1, num2));
                break;
            }
            let num2 = Number(str.substring(str_i+3));
            ret = String(operate(operator, num1, num2) );
            break;
        }
    }
    return ret;
    
}

let buttonContainer = document.getElementById('button-container');
buttonContainer.addEventListener('click', (e) => {
        let target = e.target;
        switch (target.id) {
            case '1':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "1";
                small.textContent += "1";
                break;
            case '2':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "2";
                small.textContent += "2";
                break;
            case '3':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "3";
                small.textContent += "3";
                break;
            case '4':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "4";
                small.textContent += "4";
                break;
            case '5':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "5";
                small.textContent += "5";
                
                break;
            case '6':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "6";
                small.textContent += "6";
                break;
            case '7':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "7";
                small.textContent += "7";
                break;
            case '8':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "8";
                small.textContent += "8";
                break;
            case '9':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "9";
                small.textContent += "9";
                break;
            case '0':
                if (evaluated) {
                    big.textContent = "";
                    small.textContent = "";
                    evaluated = false;
                }
                big.textContent += "0";
                small.textContent += "0";
                break;
            case 'equal':
                let result = evaluate(small.textContent);
                big.textContent = result
                small.textContent += ` = ${result}`;
                num2 = Number(big.textContent);
                evaluated = true;
                break;
            case 'minus':
                small.textContent = evaluate(small.textContent);
                num1 = Number(small.textContent);
                big.textContent = "";
                operator = "-";
                small.textContent = `${num1} - `;
                break;
            case 'plus':
                small.textContent = evaluate(small.textContent);
                num1 = Number(small.textContent);
                big.textContent = "";
                operator = "+";
                small.textContent = `${num1} + `;
                break;
            case 'times':
                small.textContent = evaluate(small.textContent);
                num1 = Number(small.textContent);
                big.textContent = "";
                operator = "x";
                small.textContent = `${num1} x `;
                break;
            case 'divide':
                small.textContent = evaluate(small.textContent);
                num1 = Number(small.textContent);
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



