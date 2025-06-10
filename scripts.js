const container = document.getElementById("container");
const reset = document.getElementById("reset");

function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "gray";
    })}} 

reset.addEventListener("click", () => {
    let newSize = prompt("What size grid do you want");
    document.querySelectorAll(".cell").forEach(e => e.remove());
    createGrid(newSize);
})

createGrid(16);