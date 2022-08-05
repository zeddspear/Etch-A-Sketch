const grid = document.getElementById('grid');
const buttonden = document.querySelectorAll('.denbtns > button');
const color = document.querySelectorAll('.colorbtns > button');
const erase = document.getElementById('erase');


buttonden.forEach(btn => {btn.addEventListener('click',changerden)});

// button for changing grid size or density
function changerden(e){

if(e.target.classList.contains('low')){
createGrid(16,false);
}
else if (e.target.classList.contains('medium'))
{
    createGrid(32,false);
}
else if (e.target.classList.contains('high')){
    createGrid(64,false);
}


}


//vaiable for colors

let colorvar = '000000';


// button click color change
color.forEach(button => {button.addEventListener('click', colorchng)});

function colorchng(e) {

    if(e.target.classList.contains('red')){
        colorvar = 'FF0000';
    }
    else if (e.target.classList.contains('black')){
    
        colorvar = '000000';
    }
    else if (e.target.classList.contains('blue')){
    colorvar = '0000FF';
    }
    else if (e.target.classList.contains('color')){
        //variable for random color 
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        colorvar = `${randomColor}`;
    }
    else if (e.target.classList.contains('rainbow')){
        colorvar = 'Rainbow';
    }
    }



//create grid cell function
function createGrid(size,isFirstcall){

if (isFirstcall==false){
    resetgrid();
}
 grid.style.setProperty('--n',size);


// for sizing and appending cells in grid div


for (let i=0;i<size*size;i++){

let cell = document.createElement('div');

cell.classList.add('cell');

// changing the background color 

cell.addEventListener('mouseover', (e) => {
if(colorvar == 'Rainbow'){
    e.target.setAttribute('style',`background-color: #${Math.floor(Math.random()*16777215).toString(16)};`);
}else{
    e.target.setAttribute('style',`background-color: #${colorvar};`);
}
})


//reset the colored grid to default
erase.addEventListener('click',()=>{
    cell.style.backgroundColor = 'whitesmoke';
})


grid.appendChild(cell);
}




}


createGrid(32,true);



// reset grid for clicking button
function resetgrid(){
  const  resetcell = document.querySelectorAll(".cell");
    resetcell.forEach((e) => e.parentNode.removeChild(e));
}

















