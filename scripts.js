const container = document.querySelector(".container");

function createGrid (gridNum) {
    const totalBoxes = gridNum * gridNum;
    for (let i = 0; i < totalBoxes; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        container.appendChild(box);
    }
}

createGrid(24)


const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('mouseover',() =>{
        box.classList.add('drawing');
    });
})

