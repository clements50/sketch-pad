const sketchPad = document.querySelector('.sketch-pad');
const btns = document.querySelectorAll('button');
const slider = document.querySelector('#slider');
const sliderValueContainer = document.querySelector('.slider-value-container');

let activeColor = 'black';
let numberOfTiles = '16';

sketchPad.style.gridTemplateColumns = `repeat(${numberOfTiles}, 1fr)`;
sketchPad.style.gridTemplateRows = `repeat(${numberOfTiles}, 1fr)`;



function renderTiles() {

    clearElement(sketchPad);

    for (let i = 0; numberOfTiles * numberOfTiles > i; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');
        sketchPad.appendChild(tile);
    }
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

sketchPad.addEventListener('pointerover', (e) => {
    if (e.target.className === 'tile') {
        e.target.style.background = activeColor;
    }
})

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        deActivateBtn()
        if (e.target.innerText.toLowerCase() === 'eraser') {
            activeColor = 'white';
        } else {
            activeColor = e.target.innerText.toLowerCase();
            e.target.style.border = `3px solid ${activeColor}`
        }
    })
})

function deActivateBtn() {
    btns.forEach(btn => {
        btn.style.border = 'none';
    })
}

slider.addEventListener('input', () => {
    sliderValueContainer.innerText = `${slider.value} X ${slider.value}`
    numberOfTiles = slider.value.toString();
    sketchPad.style.gridTemplateColumns = `repeat(${numberOfTiles}, 1fr)`;
    sketchPad.style.gridTemplateRows = `repeat(${numberOfTiles}, 1fr)`;
    renderTiles()
})

renderTiles()
