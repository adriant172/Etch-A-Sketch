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
        box.addEventListener('mouseover',() =>{
            let randomColors = randomRGB();
            box.style.backgroundColor = `rgb(${randomColors[0]}, ${randomColors[1]}, ${randomColors[2]})`
            // box.classList.add('drawing');
        });
    })
}

function randomRGB () {
    let randomRGB = [];
    for (let i = 0; i < 3; i++) {
        randomRGB[i] = Math.floor(Math.random() * 255);
    }
    return randomRGB;
}


createGrid(16)

const newGridbtn = document.querySelector('.newGrid');
let newGridNum;

newGridbtn.addEventListener('click', () => {

    do {
        newGridNum = prompt("How many squares per side would you like on your new grid ?");
        newGridNum = parseInt(newGridNum);
        if ( newGridNum >= 1 && newGridNum <= 100){
            break;
        }
    } 
    while (true);

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    
    container.style.gridTemplateColumns = `repeat(${newGridNum}, minmax(0, 1fr))`;
    container.style.gridTemplateRows = `repeat(${newGridNum}, minmax(0, 1fr))`;
    createGrid(newGridNum);
    boxes = document.querySelectorAll('.box');
})


