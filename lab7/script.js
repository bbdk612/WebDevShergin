"use strict";

const field = document.querySelector(".field");

function numberHandler(event) {
  let number = event.target.innerHTML;
  field.textContent += number;
}

function operationHandler(event) {
  let operation = event.target.innerHTML;
  if (field.innerHTML.length > 0) {
    let lastChar = field.innerHTML[field.innerHTML.length - 1];
    switch (lastChar) {
      case "*":
      case "/":
      case "+":
      case "-":
        field.innerHTML =
          field.innerHTML.slice(0, field.innerHTML.length - 1) + operation;
        break;

      default:
        field.innerHTML += operation;
        break;
    }
  }
}

function acHandler() {
  field.innerHTML = "";
}

function delHandler() {
  let r1 = /^-?\d$/g;
  let r2 = /[a-zA-Z]+/g;
  if (field.innerHTML.search(r1) > -1 || field.innerHTML.search(r2) > -1) {
    field.innerHTML = "";
  } else {
    field.innerHTML = field.innerHTML.slice(0, field.innerHTML.length - 1);
  }
}

function equalHandler() {
  const sumR = /\d+\+\d+/g;
  const multR = /\d+\*\d+/g;
  const subR = /\d+\-\d+/g;
  const divR = /\d+\/\d+/g;

  let multArr = field.innerHTML.match(multR);
  let text = field.innerHTML;

  while (multArr != null) {
    let nums = multArr[0].match(/\d+/g);
    let res = +nums[0] * +nums[1];
    
    text = text.replace(multArr[0], "" + res);
    multArr = text.match(multR);
  }

  let divArr = text.match(divR);

  while (divArr != null) {
    let nums = divArr[0].match(/\d+/g);
    let res = +nums[0] / +nums[1];
    if (res === Infinity) {
      alert("На ноль делить нельзя")
      field.innerHTML = ""
      return
    }
    text = text.replace(divArr[0], "" + res);
    divArr = text.match(divR);
  }

  let sumArr = text.match(sumR);

  while (sumArr != null) {
    let nums = sumArr[0].match(/\d+/g);
    let res = +nums[0] + +nums[1];
    text = text.replace(sumArr[0], "" + res);
    sumArr = text.match(sumR);
  }

  let subArr = text.match(subR);

  while (subArr != null) {
    let nums = subArr[0].match(/\d+/g);
    let res = +nums[0] - +nums[1];
    text = text.replace(subArr[0], "" + res);
    subArr = text.match(subR);
  }

  field.innerHTML = text;
}

let equal = document.querySelector(".equal");
equal.addEventListener("click", equalHandler);

let operationsKeys = document.querySelectorAll(".operation");
operationsKeys.forEach((operationKey) => {
  operationKey.addEventListener("click", operationHandler);
});

let acKey = document.querySelector(".ac");
acKey.addEventListener("click", acHandler);

let delKey = document.querySelector(".del");
delKey.addEventListener("click", delHandler);

let numberKeys = document.querySelectorAll(".number");
numberKeys.forEach((numberKey) => {
  numberKey.addEventListener("click", numberHandler);
});
