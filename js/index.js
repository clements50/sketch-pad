const sketchPad = document.querySelector('.sketch-pad');
sketchPad.style.gridTemplateColumns = 'repeat(16, 1fr)';
sketchPad.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i = 0; 256 > i; i++){
    const tile = document.createElement('div');
    tile.classList.add('tile');
    sketchPad.appendChild(tile);
}

