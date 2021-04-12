// one more logic to build chessboard layout
const board = document.querySelector(".board");
let index = 0;
let black = false;

for(let i=1; i <=64; ++i)
{
    const square = document.createElement('div');
    if(black)
    {
        square.classList.add("square");
        square.classList.add("black");
        index++;
        black = !black;
    }
    else{
        square.classList.add("square");
        square.classList.add("white");
        index++;
        black = !black;
    }
     
    board.appendChild(square);
    if(index === 8)
    {
        black = !black;
        index = 0;
    }
}