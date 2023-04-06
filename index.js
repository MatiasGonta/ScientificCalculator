const display = document.querySelector(".calculator-display");
const keypadButtons = document.getElementsByClassName("button");

const keypadButtonsArray = Array.from(keypadButtons);
keypadButtonsArray.forEach(button => {
    button.addEventListener("click", ()=> {
        calculator(button,display);
    })
});

window.addEventListener("keydown", (e)=> {
    const key = e.key.toLowerCase();
    let validKeys = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/","%","."," "];
    if (validKeys.includes(key)){
        display.innerHTML += key;
    }
    if (key == "backspace" || key == "delete"){
        clearLast(display);
    }
    if (key == "c"){
        clear(display);
    }
    if (key == "enter" || key == "="){
        calculate(display);
    }
});

function calculator(button,display) {
    switch (button.value) {
        case "CA":
            clear(display);
            break;
        case "C":
            clearLast(display);
            break;
        case "cos":
            calculateCos(display);
            break;
        case "sin":
            calculateSin(display);
            break;
        case "tan":
            calculateTan(display);
            break;
        case "acos":
            calculateACos(display);
            break;
        case "asin":
            calculateASin(display);
            break;
        case "atan":
            calculateATan(display);
            break;
        case "sqrt":
            calculateSqrt(display);
            break;
        case "cbrt":
            calculateCbrt(display);
            break;
        case "x2":
            calculatePow2(display);
            break;
        case "x3":
            calculatePow3(display);
            break;
        case "pi":
            calculatePi(display);
            break;
        case "e":
            calculateE(display);
            break;
        case "=":
            calculate(display);
            break;
        default:
            refresh(display,button);
            break;
    }
}

function calculateCos(display) {
    display.innerHTML = Math.cos(display.innerHTML);
}

function calculateSin(display) {
    display.innerHTML = Math.sin(display.innerHTML);
}

function calculateTan(display) {
        display.innerHTML = Math.tan(display.innerHTML);
}

function calculateACos(display) {
    display.innerHTML = Math.acos(display.innerHTML);
}

function calculateASin(display) {
    display.innerHTML = Math.asin(display.innerHTML);
}

function calculateATan(display) {
    display.innerHTML = Math.atan(display.innerHTML);
}

function calculatePow2(display) {
    if(display.innerHTML !== "") {
        let preResult = eval(display.innerHTML);
        display.innerHTML = Math.pow(preResult,2);
    }
}

function calculatePow3(display) {
    if(display.innerHTML !== "") {
        let preResult = eval(display.innerHTML);
        display.innerHTML = Math.pow(preResult,3);
    }
}

function calculatePi(display) {
    const pi = Math.PI;
    display.innerHTML += pi;
}

function calculateE(display) {
    const e = Math.E;
    display.innerHTML += e;
}

function calculateSqrt(display) {
    if(display.innerHTML !== "") {
        let preResult = eval(display.innerHTML);
        display.innerHTML = Math.sqrt(preResult);
    }
}

function calculateCbrt(display) {
    if(display.innerHTML !== "") {
        let preResult = eval(display.innerHTML);
        display.innerHTML = Math.cbrt(preResult);
    }
}

function refresh(display,button){
    if(display.innerHTML == 0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.value;
}

function calculate(display) {
    display.innerHTML = eval(display.innerHTML);
}

function clear(display) {
    display.innerHTML = "";
}

function clearLast(display) {
    display.innerHTML = display.innerHTML.slice(0,-1);
}

//Social Networks popup
const mentionName = document.getElementById("name").addEventListener("click", ()=> {
    document.querySelector(".popup").classList.add("active");
})

const closeButton = document.querySelector(".close").addEventListener("click", ()=> {
    document.querySelector(".popup").classList.remove("active");
})