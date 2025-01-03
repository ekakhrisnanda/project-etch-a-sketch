const container = document.querySelector('.container');
const inputButton = document.querySelector('.ask-input');

let gridNum = 16;

function askInput() {
    let newGridNum = prompt('How many do you want the grids to be?', 16);

    if (newGridNum > 100 || isNaN(newGridNum) || newGridNum < 1) {
        alert('Please insert a Number or Number from 1 to 100');
        return askInput();
    } else {
        gridNum = parseInt(newGridNum);
        return createGrid(gridNum);
        
    }
}

inputButton.addEventListener('click', askInput);

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

function setRandomColor() {
    return `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()})`;
}


function createGrid() {
    container.innerHTML = '';

    for (let i = 0; i < gridNum * gridNum; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('container-item');
        container.appendChild(gridItem);
    
        gridItem.addEventListener('mouseover', e => {
            e.target.style.backgroundColor = setRandomColor();
        });
    }

    container.style.setProperty('--grid-num', gridNum);
}

createGrid(gridNum);