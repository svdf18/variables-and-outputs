"use strict";

// ========== Variables ========== //
let number = 0;

// ========== Event Functions ========== //

function incrementNumber() {
    number = number + 1;
    displayNumber();
}

function decrementNumber() {
    number = number - 1;
    displayNumber();
}

// ========== Display Functions ========== //

function displayNumber() {
    document.querySelector("#number").textContent = number;
    document.querySelector("#message").textContent = `The number is now: ${number}`;
}

// ========== Event Listeners ========== //
document.querySelector("#btn-increment").addEventListener("click", incrementNumber);
document.querySelector("#btn-decrement").addEventListener("click", decrementNumber);
