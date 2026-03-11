// create 16*16 grid
const container = document.querySelector(".container");
for (let i = 0; i < 16; i++) {
    // create sigle div for each row
    const row = document.createElement("div");
    row.classList.toggle("row");
    container.appendChild(row);

    // create 16 grids for each row 
    for (let i = 0; i < 16; i++) {
        const grid = document.createElement("div");
        grid.classList.toggle("grid");
        row.appendChild(grid);
    }
}


const all_grids = document.querySelectorAll(".grid");


const onMouseOver = (e) =>{
    console.log(e.target);
    e.target.style["background-color"] = "black";
}

const onMouseOut = (e) =>
    e.target.style["background-color"] = "black";

all_grids.forEach((grid) => {
    grid.addEventListener("mouseover", onMouseOver);
    grid.addEventListener("mouseout", onMouseOut);
});







