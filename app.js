let number = 0;

function increment() {
    console.log(number);
    number = number + 1;
    displayNumber();
    document.querySelector("#message").textContent = "You incremented the number 🎉 The number is now: " + number;
}

function decrement() {
    console.log(number);
    number = number - 1;
    displayNumber();
    document.querySelector("#message").textContent = `You decremented the number 💁🏼‍♂️ The number is now: ${number}`;
}

function displayNumber() {
    document.querySelector("#number").textContent = number;
}

document.querySelector("#btn-increment").addEventListener("click", increment);
document.querySelector("#btn-decrement").addEventListener("click", decrement);
