


let buildString = "";
let value = "";
let operator = "";
const operations = ["+", "-", "/", "*"];


function analyzeBuildString(){
    let equation = buildString.split(" ");
    let firstNum = 0;
    let op = ""
    let secondNum = 0;
    equation.forEach(symbols => {
        
        switch(symbols){
            case "+":
                break;
            case "-":
                break;
            case "*":
                break;
            case "/":
                break;
            default:

        }
    });
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

function operatorPressed(operation){
    if(buildString == ""){
        buildString = "0";
    }
    buildString += " " + operation + " ";
    operator = operation;
    setBuildString();
}

function numberPressed(number){
    if(operator == ""){
        buildString += number;
        value += number
    }else{
        clearOperator();
        clearValue();
        buildString += number;
        value += number;
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
    operator = "";
}

function clearBuildString(){
    buildString = ""
    setBuildString()
}

function clearValue(){
    value = ""
    setValue()
}

function allClear(){
    buildString = "";
    value = "";
    setValueAndBuild();
}

function clear(){
    
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
            break;
        case operations[0]: case operations[1]: case operations[2]: case operations[3]:
            operatorPressed(button.dataset.type)
            break;
        case "=":
            analyzeBuildString();
            break;
        default:
            console.group("the rest")
    }

}

setButtons();