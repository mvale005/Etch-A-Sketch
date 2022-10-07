

// this is created a 16 x 16 square grid

for(let i = 0; i<256;i++){
let square = document.createElement("div");
square.className = "square-color";
square.style.width = "35.5px";
square.style.height = "35.5px";
square.style.borderStyle = "solid";
square.style.borderColor = "black";
square.style.borderWidth = "1px";


let container = document.querySelector(".bodyContainer");

container.appendChild(square);
}

let squares = document.querySelectorAll(".square-color");


for (const square of squares) {
    square.addEventListener('mouseover', changeColor)

    function changeColor(e){
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        square.style.backgroundColor = "#" + randomColor;
       
    }
  }

