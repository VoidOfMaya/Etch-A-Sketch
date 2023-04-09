//Etch A Sketch

const mainContainer = document.querySelector('.main-container');
let gridSize = 100 ;// prompt('write the size of the grid, max size is 100 x100');


const createGrid = function (gridSize){
    

    for(let x = 0; x < gridSize; x++){
        const row= document.createElement('div');
        row.classList.add(`row-element`); 
        mainContainer.appendChild(row);
        for(let y = 0; y < gridSize; y++){
            const column = document.createElement('div');
            column.setAttribute("id",`${x},${y}`);  
            column.textContent = "  ";
            column.classList.add('column-element');
            row.appendChild(column);
        }
    }


}
createGrid(gridSize);

const pixelate = document.querySelectorAll('.column-element');
 pixelate.forEach((pixel) => pixel.addEventListener('mouseover', ()=>{

    changeColor(pixel);
    
 }));


 function changeColor(element){
    element.style.backgroundColor = 'black';
 }

