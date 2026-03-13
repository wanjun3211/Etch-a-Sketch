// create 16*16 grid
let container = document.querySelector(".container");
const body = document.querySelector("body");

//set default grid quantity
let numberOfGrid = 16;

createGrid(numberOfGrid);

const button = document.querySelector(".button");
button.addEventListener("click", reRegenreateGrid);

function createGrid(gridNumber) {
    for (let i = 0; i < gridNumber; i++) {
        // create sigle div for each row
        const row = document.createElement("div");
        row.classList.toggle("row");
        container.appendChild(row);

        // create 16 grids for each row 
        for (let i = 0; i < gridNumber; i++) {
            const grid = document.createElement("div");
            grid.classList.toggle("grid");
            row.appendChild(grid);
        }
    }

    // left trails when mouse hover and leave the grid 
    const all_grids = document.querySelectorAll(".grid");
    const onMouseOver = (e) => {
        console.log(e.target);
        e.target.style["background-color"] = "black";
    }
    const onMouseOut = (e) =>
        e.target.style["background-color"] = "black";

    all_grids.forEach((grid) => {
        grid.addEventListener("mouseover", onMouseOver);
        grid.addEventListener("mouseout", onMouseOut);
    });

}


function reRegenreateGrid() {
    // User input should be less than 100
    let inputNotCorrect = true;
    while (inputNotCorrect) {
        const userInput = +prompt("Please enter the number of grid on one side", "");
        if (userInput < 100) {
            numberOfGrid = userInput;
            inputNotCorrect = false;
        }
    }

    body.removeChild(container);

    container = document.createElement("div");
    container.classList.toggle("container");
    body.appendChild(container);

    createGrid(numberOfGrid);
}



