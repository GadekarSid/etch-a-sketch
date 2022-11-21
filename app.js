let container = document.querySelector('.container');
let resizeButton = document.querySelector('.resizegrid');
let clearButton = document.querySelector('.cleargrid');
let draw = false;
let color = 'black';
let pencilicon = document.querySelector('#pencilicon');
let erasericon = document.querySelector('#erasericon');
let rainbow = document.querySelector('#rainbowicon');
function changeColor(event){
    if(draw){
        setColor(event.target,color);
    }
}
function setColor(element,color){
    if(color == 'rainbow'){
        let rainbowColor =  `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        element.style.backgroundColor = rainbowColor;
    }
   element.style.backgroundColor = color;
}
function colClick(event){
    draw = !draw;
    if(draw){
        setColor(event.target,color);
    }
}
function initializeGrid(num){
    draw = false;
    for(let i = 0; i < num;i++){
        console.log("Inside function");
        var row = document.createElement('div');
        row.classList.add('row');
        for(let j = 0;j<num;j++){
            var col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseover',changeColor);
            col.addEventListener('click',colClick);
            row.appendChild(col);
        }
        container.appendChild(row);
    }
}
function resizeGrid(){
    container.textContent = '';
    let size = 0;
    while(size == 0 || size == NaN){
        ans = prompt('Please enter the grid size');
        size = parseInt(ans);
    }
    initializeGrid(size);
}
function clearGrid(){
    var cols = document.querySelectorAll('.col');
    cols.forEach((col) => col.style.backgroundColor = 'transparent');
    draw = false;
}
resizeButton.addEventListener('click',resizeGrid);
clearButton.addEventListener('click',clearGrid);
window.onload = initializeGrid(16);

pencilicon.addEventListener('click',() => color = 'black');
erasericon.addEventListener('click',() => color = 'transparent');
rainbowicon.addEventListener('click',() => color = 'rainbow');