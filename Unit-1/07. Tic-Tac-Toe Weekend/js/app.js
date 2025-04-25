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


/*-------------------------------- Functions --------------------------------*/

function init () {
    board = 
    [null, null, null, null, null, null, null, null, null];
    turn = (1);
    winner = (null);
    tie = ('Tie');
    console.log(init)
    render();
};


// function checkTie() {
//     if (board.every(cell => cell !== null) && !winner) {
//       winner = 'Tie';
//     }
//   }



// function handleClick(index) {
//     if (board[index] !== null || winner !== null) return;
//     board[index] = turn;
//     checkWinner();
//     checkTie();
//     if (winner === null) {
//         turn *= -1;
//     }
// };

function handleClick(index) {
    const squareIdx = index;

    if (squareIdx.textContent === 'X' || squareIdx.textContent === 'O' || winner !== null) return;
    placePiece(index);
    
    render();
    console.log(board);
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
    if (winner === '1') {
        messageEl.textContent = " X's Win!";
    } else if (winner === '-1') {
        messageEl.textContent = " O's Win!";
    } else if (winner === 'Tie') {
        messageEl.textContent = " Tie Game!";}
    // } else if (winner === null) {
    //     messageEl.textContent = `${PLAYERS}'s Turn`;
    // }
};

function render() {
    updateBoard();
    renderMessage();
    console.log('render')
};


/*----------------------------- Event Listeners -----------------------------*/


//6) Handle a player clicking a square with a `handleClick` function.
squareELs.forEach((square, index) => {
    square.addEventListener('click', () => handleClick(index));
  });

//7) Create Reset functionality.
