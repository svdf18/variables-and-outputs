"use strict";

let number=0;

window.addEventListener("load", initAap);

function initAap() {
    console.log("app ready");
    document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
    document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
}

function incrementNumber(){
    number++
    displayNumber();
}

function decrementNumber(){
    number-- 
    displayNumber();
}

function displayNumber(){
    document.querySelector("#number").textContent = number;

    let message = `Tallet er nu: ${number}`;
    document.querySelector("#message").textContent = message;
}