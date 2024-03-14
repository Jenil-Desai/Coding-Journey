let display = document.querySelector(".result");

let currentInput = '';

let buttons = document.querySelector(".button2");
let buttonsBeta = document.querySelector(".button1");

buttonsBeta.addEventListener("click", (Event) => {
    alert(`This Buttons Are Coming Soon`);
});

buttons.addEventListener("click", (event) => {
    console.dir(event.target.parentElement.className);
    check();
    if (event.target.parentElement.className == "zero") {
        appendToDisplay(0);   
    } else  if (event.target.parentElement.className == "one") {
        appendToDisplay(1);   
    } else if (event.target.parentElement.className == "two") {
        appendToDisplay(2);        
    } else if (event.target.parentElement.className == "three") {
        appendToDisplay(3);
    } else if (event.target.parentElement.className == "four") {
        appendToDisplay(4);
    } else if (event.target.parentElement.className == "five") {
        appendToDisplay(5);
    } else if (event.target.parentElement.className == "six") {
        appendToDisplay(6);
    } else if (event.target.parentElement.className == "seven") {
        appendToDisplay(7);
    } else if (event.target.parentElement.className == "eight") {
        appendToDisplay(8);
    } else if (event.target.parentElement.className == "nine") {
        appendToDisplay(9);
    } else if (event.target.parentElement.className == "addition") {
        appendToDisplay("+");
    } else if (event.target.parentElement.className == "subtraction") {
        appendToDisplay("-");
    } else if (event.target.parentElement.className == "multiplication") {
        appendToDisplay("*");
    } else if (event.target.parentElement.className == "division") {
        appendToDisplay("/");
    } else if (event.target.parentElement.className == "equal") {
        calculateResult();
    } else if (event.target.parentElement.className == "clear-all") {
        display.innerHTML = "";
        currentInput = "";
    } else if (event.target.parentElement.className == "delete-left") {
        display.innerHTML = currentInput.slice(0,-1);
    } else{

    }
});

function appendToDisplay(value) {
    currentInput += value;
    display.innerHTML = currentInput;
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerHTML = result;
    } catch (error) {
        display.innerHTML = error;
    }
}

function check() {
    if (currentInput=="+" || currentInput=="-" || currentInput=="*" || currentInput=="/") {
        display.classList.add("result-wrong");
        setTimeout(() => {
            alert(`Only Operator Is Not Allowed`);
            display.classList.remove("result-wrong");
            currentInput = "";
            display.innerHTML = currentInput;
        }, 1000);
        
    }
}