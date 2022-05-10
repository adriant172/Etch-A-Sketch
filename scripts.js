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


