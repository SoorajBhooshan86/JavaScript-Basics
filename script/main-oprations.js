import { divideNum } from "./divide.js";
import { substractNum } from "./substract.js";
import { multiplyNum } from "./multiply.js";
import { addNum } from "./add.js";


let result = document.querySelector('.result');

const firstElemnet = document.querySelector('.first');
const secondElement = document.querySelector('.second');
const addButtonElement = document.querySelector('.js-add');
const subButtonElement = document.querySelector('.js-sub');
const mulButtonElement = document.querySelector('.js-mul');
const divButtonElement = document.querySelector('.js-div');

addButtonElement.addEventListener('click', () => result.innerHTML = addNum(Number(firstElemnet.value), Number(secondElement.value)));
subButtonElement.addEventListener('click', () => result.innerHTML = substractNum(Number(firstElemnet.value), Number(secondElement.value)));
mulButtonElement.addEventListener('click', () => result.innerHTML = multiplyNum(Number(firstElemnet.value), Number(secondElement.value)));
divButtonElement.addEventListener('click', () => result.innerHTML = divideNum(Number(firstElemnet.value), Number(secondElement.value)));

