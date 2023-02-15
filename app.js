let number = 0;

function increment() {
    console.log(number);
    number = number + 1;
    document.querySelector("#number").innerText = number;
    document.querySelector("#message").innerText =
        "You incremented the number 🎉";
}

function decrement() {
    console.log(number);
    number = number - 1;
    document.querySelector("#number").innerText = number;
    document.querySelector("#message").innerText =
        "You decremented the number 💁🏼‍♂️";
}

document.querySelector("#btn-increment").addEventListener("click", increment);
document.querySelector("#btn-decrement").addEventListener("click", decrement);
