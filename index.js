const output = document.querySelector("h1");

const btnSUM = document.querySelector(".sum");
const btnRest = document.querySelector(".rest");
const btnAgain = document.querySelector(".again");

const add = () => {
    output.textContent = parseInt(output.textContent) + 1;
}

const rest = () => {
    output.textContent = parseInt(output.textContent) - 1;
}

const again = () => {
    output.textContent = 0;
}

btnSUM.addEventListener("click", add)
btnRest.addEventListener("click", rest)
btnAgain.addEventListener("click", again)
