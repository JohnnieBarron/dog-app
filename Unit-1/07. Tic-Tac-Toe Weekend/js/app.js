/*-------------------------------- Constants --------------------------------*/

const PLAYERS = {
    '1': 'X',
    '-1': 'O',
  };

  const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // top-left to bottom-right diagonal
    [2, 4, 6]  // top-right to bottom-left diagonal
  ];

/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareELs = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('h2');
const resetBtnEl = document.getElementById('reset');


/*-------------------------------- Functions --------------------------------*/

function init () {
    board = 
    [null, null, null, null, null, null, null, null, null];
    turn = (1);
    winner = (null);
    tie = (false);
    console.log(init)
    render();
};


function switchTurn() {
    if (winner !== null) return;
    else {
        turn *= -1;
    }

};



function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        
        if (board[a] !== null &&
            board[a] === board[b] &&
            board[a] === board[c]) {
                winner = turn; 
                return;
            }
        }
    }

    function checkTie() {
        if (winner !== null) return;
        if (board.includes(null)) {
            tie = false;
          } else {
            tie = true;
            winner = 'Tie'; 
          }

    };
    
    
    function handleClick(index) {
        const squareIdx = index;
    
        if (squareIdx.textContent === 'X' || squareIdx.textContent === 'O' || winner !== null) return;
        placePiece(index);
        checkWinner();
        checkTie();
        switchTurn();
        
        render();
        console.log(winner);
    }; 



function placePiece(index) {
    board[index] = turn;
}

function updateBoard() {
    board.forEach((value, index) => {
        if (value === 1) {
            squareELs[index].textContent = 'X';
        } else if (value === -1) {
            squareELs[index].textContent = 'O';
        } else {
            squareELs[index].textContent = '';
        }
    });
}

function renderMessage() {
    if (winner === 1) {
      messageEl.textContent = "X's Win!";
    } else if (winner === -1) {
      messageEl.textContent = "O's Win!";
    } else if (winner === 'Tie' || tie === true) {
      messageEl.textContent = "Tie Game!";
    } else {
      messageEl.textContent = `${PLAYERS[turn]}'s Turn`;
    }
  }
  
  

function render() {
    updateBoard();
    renderMessage();
    console.log('render')
};


/*----------------------------- Event Listeners -----------------------------*/



squareELs.forEach((square, index) => {
    square.addEventListener('click', () => handleClick(index));
  });
  resetBtnEl.addEventListener('click', init);

