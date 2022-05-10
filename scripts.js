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
            box.classList.add('drawing');
        });
    })
}



createGrid(16)

// Set up hover effect so grid boxes change color upon mouseover

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


