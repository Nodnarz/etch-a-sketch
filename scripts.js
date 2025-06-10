const rows = 16;
const cols = 16;
const container = document.getElementById("container");

for (let i = 0; i < cols * rows; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "gray";
    })
}

