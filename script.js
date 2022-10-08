createGrid(16); // sets 16x16 grid when page loads
colorSquares();

//let gridSize =16;

let setSize = document.getElementById('sizeBtn');
setSize.addEventListener('click',setGridSize);

let clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click',clearGrid);

let selectColor = document.getElementById("colorpicker");
selectColor.addEventListener("input",pickAColor);

let rainBowBtn = document.getElementById("rainbowBtn");
rainBowBtn.addEventListener("click",changeBackToRainbow);



function clearGrid(e){
  
  let clearSquares = document.querySelectorAll(".square-color");
  for (const square of clearSquares) {
  square.style.backgroundColor = "white";    
  }
    
}

function setGridSize(e){
   numOfSquares = 0;
   gridSize = prompt("set a grid size, pick a number 100 or below");
   createGrid(gridSize);
}


function createGrid(gridSize) {

//first remove grid, so a new one can be put in there.

removeGrid();

     let bodyContainer  = document.querySelector(".bodyContainer");
     let style = getComputedStyle(bodyContainer);
     let bodyContainerWidth = style.width;//returns width+px so next line removes the px
     const removedLast2 = bodyContainerWidth.slice(0, -2);// removing px
     
for(let i = 0; i<(gridSize*gridSize);i++){
        let square = document.createElement("div");
        square.className = "square-color square-rm";
        square.style.width = (removedLast2/ gridSize -2)  + "px";
        square.style.height = (removedLast2/ gridSize -2) + "px";
        square.style.borderStyle = "solid";
        square.style.borderColor = "white";
        square.style.borderWidth = "1px";
        let container = document.querySelector(".bodyContainer");
        container.appendChild(square);        
    }
    
  colorSquares();

}

function colorSquares(){
let squares = document.querySelectorAll(".square-color");

for (const square of squares) {
    square.addEventListener('mouseover', changeColor)

    function changeColor(e){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = "#" + randomColor;
       
    }
  }
}

function removeGrid(){
 let squares = document.querySelectorAll(".square-rm");
 
for (const square of squares) {
    square.remove();
  }

}

function pickAColor(e){
  var color = document.getElementById("colorpicker").value;
 console.log(color);
 let squares = document.querySelectorAll(".square-color");

 for (const square of squares) {
     square.addEventListener('mouseover', changeToColor)
 
     function changeToColor(e){
       
         square.style.backgroundColor = color;
        
     }
   }
}

function changeBackToRainbow(e){

  colorSquares();

}