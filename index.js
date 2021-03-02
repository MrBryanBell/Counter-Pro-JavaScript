const output = document.querySelector("h1");

const btnSUM = document.querySelector(".sum");
const btnRest = document.querySelector(".rest");
const btnAgain = document.querySelector(".again");
const gridContainer = document.querySelector(".second");

gridContainer.style.gap = parseInt(output.textContent) + "px";



const add = () => {
    output.textContent = parseInt(output.textContent) + 1;
    gridContainer.style.gap = parseInt(output.textContent) +"px";
}

const rest = () => {
    output.textContent = parseInt(output.textContent) - 1;
    gridContainer.style.gap = parseInt(output.textContent) +"px";
}

const again = () => {
    output.textContent = 1;
    gridContainer.style.gap = parseInt(output.textContent) +"px";
}

btnSUM.addEventListener("click", add)
btnRest.addEventListener("click", rest)
btnAgain.addEventListener("click", again)


