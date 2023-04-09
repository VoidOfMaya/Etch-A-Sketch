//Etch A Sketch

const mainContainer = document.querySelector('.main-container');

let gridSize = 16

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

const button = document.querySelector('#btn');
button.addEventListener('click', ()=>{

    const divElement = document.querySelectorAll('.column-element');
    resetColor(divElement);
    changeSize();
    console.log('color has changed');

   
});

 function changeColor(element){
    element.style.backgroundColor = 'black';

 }

function resetColor(elements){

    elements.forEach((el) =>{
        el.style.backgroundColor = 'white';       
    })

 }
 function changeSize(){
    let gridChoice = prompt("choose a grid size between 16X16 and 100X100");
    if (gridChoice >=16 && gridChoice <= 100){
        gridSize = gridChoice;
    }else{
        changeSize();
    }

 }



