const boxes = Array.from(document.getElementsByClassName('box'));
console.log(boxes);
const  playText = document.getElementById('playText');


const restartBtn = document.getElementById('restartButton');
const O_Player = "⚫ ";
const X_Player = "❌ ";
let currentPlayer;

const spaces = [];



const drawBoard = function() {
     boxes.forEach((box, index) => {
        let styleString = ' ';
        if (index < 3) {
            styleString += 'border-bottom: 2px solid var(--blue);'; 
        }
        if (index % 3 === 0){
            styleString += 'border-right: 2px solid var(--blue);'; 

        }
        if (index % 3 === 2 ) {
            styleString += 'border-left: 2px solid var(--blue);'; 

        }
        if (index > 5){
            styleString += 'border-top: 2px solid var(--blue);'; 

        }
        box.style = styleString
        box.addEventListener('click', boxClicked)
     });
 } ;

let boxClicked = function(e){
    const id = e.target.id;
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!`;
            return
        }

        currentPlayer = currentPlayer === O_Player ? X_Player : O_Player;
       
      
        
    }
};


const playerHasWon = function () {
    if (spaces[0] === currentPlayer){
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        } 

        
   
    } 

    else if (spaces[8] === currentPlayer){
        if(spaces[2] === currentPlayer &&  spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }
        
    } 

    else if (spaces[4] === currentPlayer){
        if(spaces[1] === currentPlayer &&  spaces[7] === currentPlayer){
            console.log(`${currentPlayer} wins `)
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }


    }   if (spaces[2] === currentPlayer){
        if(spaces[4] === currentPlayer &&  spaces[6] === currentPlayer){
            console.log(`${currentPlayer} wins`)
            return true;
        }
}

}

const restart = () => {
    spaces.forEach((space, index)=> {
        spaces[index] = null;

    });
    boxes.forEach((box)  => {
        box.innerText = '';
    });

    playText.innerText = `Play Tic Tac Toe!`;
    currentPlayer = O_Player;

}


restartButton.addEventListener('click', restart);


restart();
drawBoard();


