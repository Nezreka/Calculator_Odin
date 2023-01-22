function setButtons(){
    let buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttonClicked(button);
        })
    });
}

function buttonClicked(button){
    console.log(button.dataset.type)
}

setButtons();