


let equation = "";
let outputValue = "";
let operator = ""
let userNumbers = [];
const operations = ["+", "-", "/", "*", "="];
const pie = 3.14159265359;


function operate(num1, operation, num2){
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
    return answer.toFixed(1)
}

function add(num1, num2){
    console.log("add")
    return num1 + num2
}

function subtract(num1, num2){
    console.log("subtract")

    return num1 - num2
}

function multiply(num1, num2){
    console.log("multiply")

    return num1 * num2
}

function divide(num1, num2){
    console.log("divide")

    return num1 / num2
}

function addDecimal(){
    if(outputValue != ""){
        if(!outputValue.includes(".")){
            outputValue += "."
        }
        
        
    }else{
        outputValue = "0."
    }
    updateValue()
}

function numberPressed(num){
    if(operator === "="){
        userNumbers = []
        operator = ""
        clearEquation()
        clearValue()
    }
    outputValue += num;
    updateValue()
    
}

function operationPressed(operation){
    
    if(operation === "="){
        
        if(outputValue != ""){
            if(userNumbers.length == 0){
                
            }else{
                userNumbers.push(parseFloat(outputValue))
                outputValue = operate(userNumbers[0], operator, userNumbers[1])
                equation += userNumbers[1] + " = "
                userNumbers = [outputValue]
                
                operator = operation
                updateValueAndEquation()
                clearValue()
            }
            
            
        }

        
    }else{
        console.log()
        switch(userNumbers.length){
            case 0:
                if(outputValue != ""){
                    userNumbers.push(parseFloat(outputValue))
                    equation = outputValue + " " + operation + " "
                    operator = operation
                    clearValue()
                    updateEquation()
                }
                break;
            case 1:
                if(outputValue != ""){
                    
                        userNumbers.push(parseFloat(outputValue))
                        outputValue = operate(userNumbers[0], operator, userNumbers[1])
                        userNumbers = [outputValue]
                        equation = outputValue + " " + operation + " "
                        operator = operation
                        clearValue()
                        updateValueAndEquation()
                    
                    
                } else{
                    if(operator === "="){
                        console.log(operator)
                        equation = userNumbers[0] + " " + operation + " "
                        operator = operation
                        clearValue()
                        updateEquation()
                    }
                }
                break;
            case 2:
                equation = userNumbers[0] + " " + operation + " "

                operator = operation
                clearValue()
                updateEquation()
                break;
            default:
                console.log("oops")
        }
    }
    
}

function updateValueAndEquation(){
    updateValue()
    updateEquation()
}

function updateValue(){
    if(outputValue === ""){
        document.querySelector(".outputValue").textContent = 0;
    }else{
        document.querySelector(".outputValue").textContent = outputValue;

    }
}

function updateEquation(){
    document.querySelector(".equation").textContent = equation;
}

function clearValue(){
    
    outputValue = ""
}

function clearEquation(){
    equation = ""
}

function clearValueAndEquation(){
    clearValue()
    clearEquation()
}

function clear(){
    if(outputValue != ""){
        outputValue = outputValue.slice(0, -1);
        updateValue()
    }
    
}

function clearAll(){
    clearValueAndEquation()
    updateValueAndEquation()
    userNumbers = []
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
            numberPressed(button.dataset.type);
            break;
        case "clearAll":
            clearAll()
            break;
        case "clear":
            clear()
            break;
        case operations[0]: case operations[1]: case operations[2]: case operations[3]: case operations[4]:
            operationPressed(button.dataset.type);
            break;
        case ".":
            addDecimal()
            break;
        case "pi":
            
            break;
        default:
            console.group("the rest")
    }

}

setButtons();