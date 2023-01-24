


let equation = "";
let outputValue = "";
let operator = "";
const operations = ["+", "-", "/", "*"];
const pie = 3.14159265359;

let userNumbers = [];


function operate(num1, num2, operation){
    let answer;
    switch(operation){
        case "+":
            answer = add(num1, num2)
            break;
        case "-":
            answer = subtract(num1, num2)
            break;
        case "/":
            answer = divide(num1, num2)
            break;
        case "*":
            answer = multiply(num1, num2)
            break;
        default:
            console.log("else")
    }
    return answer
}

function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}




function setButtons(){
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonClicked(button);
        })
    });
}



function buttonClicked(button){
    
    switch(button.dataset.type){
        case "7": case "8": case "9": case "4": case "5": case "6": case "1": case "2": case "3": case "0":
            
            break;
        case "clearAll":
            
            break;
        case "clear":
            break;
        case operations[0]: case operations[1]: case operations[2]: case operations[3]:
            
            break;
        case "=":
            break;
        case ".":
            break;
        case "pi":
            
            break;
        default:
            console.group("the rest")
    }

}

setButtons();