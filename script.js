let gridSize = 16;
let defaultColor = '#000000';
const container = document.querySelector(".container");
const randomBtn = document.getElementById("randomClr");
const blkClr = document.getElementById("blackClr");
const specificColor = document.getElementById("specColor");
const specColorInput = document.getElementById("spec-color-input");
const erase = document.getElementById("erase");
const reset = document.getElementById("reset");
const changeSize = document.getElementById("changeSize");




function createGrid(gridSize) {


    const divSize = 750 / gridSize;
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("gridRow");
        for (let j = 0; j < gridSize; j++) {
            let col = document.createElement("div");
            col.style.border = "2px solid gray";
            col.style.height = `${divSize}px`;
            col.style.width = `${divSize}px`;
            col.classList.add("gridCol");
            row.appendChild(col);

            col.addEventListener("mouseover",() => {
                col.style.backgroundColor = defaultColor;
            });
        }

        container.appendChild(row);
    }
    
}


function getRandomColors(event) {
    let colors = `rgb(${Math.round(Math.random() * 256)},${Math.round(Math.random() * 256)},${Math.round(Math.random() * 256)})`;
    event.target.style.backgroundColor = colors;
}

randomBtn.addEventListener("click", () => {
    specColorInput.style.visibility = "hidden";
    specColorInput.style.width = "0px";
    specColorInput.value = defaultColor;

    const gridBox = document.querySelectorAll(".gridCol");
    gridBox.forEach((grid) => {
        grid.removeEventListener("mouseover", getRandomColors);
        grid.addEventListener("mouseover", getRandomColors);
    });
});

function changeGridSize() {
    let newGridSize = prompt("Enter a new grid size");

    if(newGridSize === null) {
        return;
    }

    let gridSize = parseInt(newGridSize);
    if (gridSize > 100 || gridSize < 4 || isNaN(gridSize)) {
        alert("Enter a valid number between 4 to 100");
        changeGridSize();

    } else {
        container.innerHTML = '';
        createGrid(gridSize);
    }
}


blkClr.addEventListener("click", () => {
    specColorInput.style.visibility = "hidden";
    specColorInput.style.width = "0px";
    specColorInput.value = defaultColor;


    const gridBox = document.querySelectorAll(".gridCol");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "black";
        })

    })
})


specificColor.addEventListener("mouseover", () => {
    specColorInput.style.visibility = "visible";
    specColorInput.style.width = "50px";
})

specColorInput.addEventListener('input', () => {
    let selectedColor = specColorInput.value;
    console.log(`selected color is ${selectedColor}`);
    const gridBox = document.querySelectorAll(".gridCol");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = selectedColor;
        });

    })
})

erase.addEventListener("click", () => {
    const gridBox = document.querySelectorAll(".gridCol");
    gridBox.forEach((grid) => {
        grid.addEventListener("mouseover", () => {
            grid.style.backgroundColor = "white";
        });

    })
})


changeSize.addEventListener("click", () => {
    changeGridSize();
})

reset.addEventListener("click", () => {
    location.reload();
})

createGrid(gridSize);