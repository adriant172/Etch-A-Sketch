const container = document.querySelector(".container");

function createGrid (gridNum) {
    const totalBoxes = gridNum * gridNum;
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
    // Set up hover effect so grid boxes change color upon mouseover
    let boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        let counter = 0;
        let currentColors;
        box.addEventListener('mouseover',() =>{
            //Changes the box background to a random color
            if (counter === 0) {
                counter++;
                currentColors = randomRGB();
                box.style.backgroundColor = `rgb(${currentColors[0]}, ${currentColors[1]}, ${currentColors[2]})`;
            } else {
                // Adds 10% black to the current RGB until it reaches 100% black
                let result = 10 - counter;
                let remainingPercent = parseFloat(`0.${result}`);
                for (let i = 0; i < currentColors.length; i++) {
                    currentColors[i] = currentColors[i] * remainingPercent;
                }
                box.style.backgroundColor = `rgb(${currentColors[0]}, ${currentColors[1]}, ${currentColors[2]})`;
                counter++;
                if( counter === 10) {
                    return;
                }
            }
            // box.classList.add('drawing');
        });
    })
}

function clearGrid () {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }   
}

function randomRGB () {
    let randomRGB = [];
    for (let i = 0; i < 3; i++) {
        randomRGB[i] = Math.floor(Math.random() * 255);
    }
    return randomRGB;
}

// Load page with default 16 by 16 grid
createGrid(16);

const newGridBtn = document.querySelector('.newGrid');
let currentGridNum = 16;

// This will create a new grid based on the users input
newGridBtn.addEventListener('click', () => {

    do {
        currentGridNum = prompt("How many squares per side would you like on your new grid ?");
        currentGridNum = parseInt(currentGridNum);
        if ( currentGridNum >= 1 && currentGridNum <= 100){
            break;
        }
    } 
    while (true);

    clearGrid();

    container.style.gridTemplateColumns = `repeat(${currentGridNum}, minmax(0, 1fr))`;
    container.style.gridTemplateRows = `repeat(${currentGridNum}, minmax(0, 1fr))`;
    createGrid(currentGridNum);
    boxes = document.querySelectorAll('.box');
})

// This will clear and recreate the grid based on the current Grid number provided by the user
const clearGridBtn = document.querySelector('.clearGrid');
clearGridBtn.addEventListener('click', () => {
    clearGrid();
    createGrid(currentGridNum);
});
