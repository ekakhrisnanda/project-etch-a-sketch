// create grid squares
const container = document.querySelector('.container');
const inputButton = document.querySelector('.ask-input');

let gridNum = 16;

function askInput() {
    let newGridNum = prompt('How many do you want the grids to be?', 16);

    if (newGridNum > 100 || isNaN(newGridNum)) {
        alert('Please insert a Number or Number less than 100');
        return askInput();
    } else {
        return gridNum = newGridNum;
    }
}

inputButton.addEventListener('click', askInput);

for (let i = 0; i < gridNum * gridNum; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('container-item');
    container.appendChild(gridItem);

    gridItem.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black';
    });

}