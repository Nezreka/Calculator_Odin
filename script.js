


let buildString = "";
let value = "";
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

function analyze(){
    if(value != "" && !buildString.includes("=")){
        userNumbers.push(parseInt(value));
        buildString += " = ";
        setBuildString();
    }
    let answer = 0;
    if(userNumbers.length == 2){
        switch(operator){
            case "+":
                answer = add(userNumbers[0], userNumbers[1])
                break;
            case "-":
                answer = subtract(userNumbers[0], userNumbers[1])
                break;
            case "/":
                answer = divide(userNumbers[0], userNumbers[1])
                break;
            case "*":
                answer = multiply(userNumbers[0], userNumbers[1])
                break;
            default:
                console.log("else")
        }
        userNumbers = [answer]
        value = answer;
        setValue()
    
    }

    
    console.log(userNumbers)
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

function pi(){
   
}

function decimal(){
    if(value == ""){
        value = "0";
        buildString = "0";
    }
    buildString += ".";
    value += ".";
    setValue();
}

function forwardLook(){

}

function operatorPressed(operation){
    if(userNumbers.length == 0){
        operator = operation;

        buildString += " " + operation + " "

        userNumbers.push(parseInt(value))
    }else if(userNumbers.length == 1){
        operator = operation;
        buildString = userNumbers[0] + " " + operation + " "

    }else{
        userNumbers.push(parseInt(value))
        userNumbers = [operate(userNumbers[0], userNumbers[1], operation)]
        
        console.log(userNumbers)
        buildString = userNumbers[0] + " " + operation;
        setBuildString()
        operator = operation;
    }
    
    
    clearValue();
    setValueAndBuild()
}

function numberPressed(number){

    buildString += number;
    value += number;

    if(userNumbers.length <= 1){

    }
    
    setValue();
}

function setValueAndBuild(){
    setValue();
    setBuildString();
}

function setValue(){
    if(value == ""){
        document.getElementsByClassName("output")[0].textContent = 0
    }else{
        document.getElementsByClassName("output")[0].textContent = value;

    }
}

function setBuildString(){
    document.getElementsByClassName("previousInputs")[0].textContent = buildString
}

function clearOperator(){
    
}

function clearBuildString(){
    
}

function clearValue(){
   value = ""
   setValue()
}

function allClear(){
    value = ""
    buildString = ""
    userNumbers = []
    setValueAndBuild()
}

function clear(){
    value = value.slice(0, -1)
    buildString = buildString.slice(0, -1)
    setValue()
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
            allClear();
            break;
        case "clear":
            clear()
            break;
        case operations[0]: case operations[1]: case operations[2]: case operations[3]:
            operatorPressed(button.dataset.type)
            break;
        case "=":
            analyze();
            break;
        case ".":
            decimal()
            break;
        case "pi":
            
            break;
        default:
            console.group("the rest")
    }

}

setButtons();