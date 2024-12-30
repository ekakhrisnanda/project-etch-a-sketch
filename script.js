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

// create a button from html to ask an input of how many grids they want to
// create a function to shows the input
// if the newGridNumbers more than 100, it shows alert to input less than that and repeat the prompt
// else do multiplication of input x input
// stores the input in inputNum variable

// search how to make a default arguments/parameters for loop
// create a variable and store 16 as default value
// in for loop, change the argument to variable * variable
// if there is a new input, change the variable value to the input newGridNumbers