const sketchPad = document.querySelector('.sketch-pad');
const btns = document.querySelectorAll('button');
sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)';


function renderTiles() {

    clearElement(sketchPad);

    for (let i = 0; 256 > i; i++) {
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
    console.log(e.target)
    if (e.target.className === 'tile') {
        console.log('hi')
        e.target.style.background = 'black';
    }
})

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
     console.log(e.target)
    })
})

renderTiles()
