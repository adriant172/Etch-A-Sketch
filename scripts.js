const xAxis = document.querySelector("#x-axis");
const yAxis = document.querySelector("#y-axis");

for (let i = 0; i < 16; i++) {
    const xBox = document.createElement('div');
    xBox.classList.add('xBox');
    xAxis.appendChild(xBox);
    for (let j = 0; j < 16; j++) {
        const box = document.createElement('div');
        box.classList.add('box');
        xBox.appendChild(box);
    };
};