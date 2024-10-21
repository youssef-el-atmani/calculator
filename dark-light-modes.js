"use strict";

const calculator = document.querySelector('.calculator');
const modeSwitcher = document.querySelector('.mode img');
const outerDisplayContainer = document.querySelector('.display');
const innerDisplayContainer = document.querySelector('.show');
const operandsList = [...document.querySelectorAll('.operands-column button')];
const operatorWrappersList = [...document.querySelectorAll('.operator-wrapper')];
const operatorsList = [...document.querySelectorAll('.operator')];
const equalBtnWrapper = document.querySelector('.equal-wrapper');

const currentMode = {status: "dark"};

modeSwitcher.addEventListener("click",()=>{
    ((currentMode.status === "light")? switchToDarkMode(currentMode) : switchToLightMode(currentMode));
});


function switchToLightMode(mode){
    calculator.classList.remove('dark--calculator');
    calculator.classList.add('light--calculator');

    modeSwitcher.src = "./images/light-mode-switcher.png";
    modeSwitcher.classList.remove('dark--switcher');
    modeSwitcher.classList.add('light--switcher');

    outerDisplayContainer.classList.remove('dark--outer-display');
    outerDisplayContainer.classList.add('light--outer-display');

    innerDisplayContainer.classList.remove('dark--inner-display');
    innerDisplayContainer.classList.add('light--inner-display');

    operandsList.forEach((operand)=>{
        operand.classList.remove('dark--operand');
        operand.classList.add('light--operand');
    });

    operatorWrappersList.forEach((operatorWrapper)=>{
        operatorWrapper.classList.remove('dark--operator-wrapper');
        operatorWrapper.classList.add('light--operator-wrapper');
    });

    operatorsList.forEach((operator)=>{
        operator.classList.remove('dark--operator');
        operator.classList.add('light--operator');
    })

    equalBtnWrapper.classList.remove('dark--equal-wrapper');
    equalBtnWrapper.classList.add('light--equal-wrapper');


    // Update the current mode status
    mode.status = "light";
}

function switchToDarkMode(mode){
    calculator.classList.remove('light-calculator');
    calculator.classList.add('dark--calculator');

    modeSwitcher.src = "./images/dark-mode-switcher.png";
    modeSwitcher.classList.remove('light--switcher');
    modeSwitcher.classList.add('dark--switcher');

    outerDisplayContainer.classList.remove('light--outer-display');
    outerDisplayContainer.classList.add('dark--outer-display');

    innerDisplayContainer.classList.remove('light--inner-display');
    innerDisplayContainer.classList.add('dark--inner-display');

    operandsList.forEach((operand)=>{
        operand.classList.remove('light--operand');
        operand.classList.add('dark--operand');
    });

    operatorWrappersList.forEach((operatorWrapper)=>{
        operatorWrapper.classList.remove('light--operator-wrapper');
        operatorWrapper.classList.add('dark--operator-wrapper');
    });

    operatorsList.forEach((operator)=>{
        operator.classList.remove('light--operator');
        operator.classList.add('dark--operator');

    })

    equalBtnWrapper.classList.remove('light--equal-wrapper');
    equalBtnWrapper.classList.add('dark--equal-wrapper');


    // Update the current mode status
    mode.status = "dark";
}

switchToLightMode(currentMode);