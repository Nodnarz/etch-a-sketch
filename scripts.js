const container = document.getElementById("container");
const reset = document.getElementById("reset");

function createGrid(size) {
    const containerSize = 600; // Set a fixed size for precise layout
    container.style.width = `${containerSize}px`; // Set container width

    const cellSize = containerSize / size; // size in px
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;

        container.appendChild(cell);
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "gray";
        });
    }
}


reset.addEventListener("click", () => {
    let newSize = prompt("What size grid do you want? (max: 100)");
    if (newSize > 0 && newSize <= 100) {
        document.querySelectorAll(".cell").forEach(e => e.remove());
        createGrid(newSize);
    }
    else alert("Keep the grid size in bounds from 1-100.");
})

createGrid(16);