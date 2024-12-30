// create grid squares
const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('container-item');
    container.appendChild(gridItem);

    gridItem.addEventListener('mouseover', e => {
        e.target.style.backgroundColor = 'black';
    });

}