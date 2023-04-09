//Etch A Sketch

const mainContainer = document.querySelector('.main-container');
let gridSize = 16 ;// prompt('write the size of the grid, max size is 100 x100');


const createGrid = function (gridSize){
    
    for( let y = 0; y < gridSize; y++){
        for(let x = 0; x < gridSize; x++){
            const pixel= document.createElement('div');
            pixel.classList.add(`grid-element`);
            pixel.textContent =`div`;
            
            mainContainer.appendChild(pixel);
        }
    }
}
createGrid(gridSize);
