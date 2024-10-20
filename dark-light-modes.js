"use strict";

const calculator = document.querySelector('.calculator');
const modeSwitcher = document.querySelector('.mode img');
const outerDisplayContainer = document.querySelector('.display');
const innerDisplayContainer = document.querySelector('.show');
const operandsList = [...document.querySelectorAll('.operands-column button')];
const operatorWrappersList = [...document.querySelectorAll('.operator-wrapper')];
const operatorsList = [...document.querySelectorAll('.operator')];
const equalBtnWrapper = document.querySelector('.equal-wrapper');