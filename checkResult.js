import foeThrow from './foeThrow.js';
export default checkResult;
export { win, lose, draw };


const player = document.querySelector('.input:checked');
const computer = foeThrow();
const winLose = document.getElementById('winLose');

function draw() {
    winLose.textContent = 'It\'s a draw!';
}

function win() {
    winLose.textContent = 'You won!';
}

function lose() {
    winLose.textContent = 'You lost!';
}

function checkResult() {
    if (player === computer) {
        draw();
    } else if (player === 'rock' && computer === 'paper') {
        lose();
    } else if (player === 'rock' && computer === 'scissors') {
        win();
    } else if (player === 'paper' && computer === 'rock') {
        win();
    } else if (player === 'paper' && computer === 'scissors') {
        lose();
    } else if (player === 'scissors' && computer === 'rock') {
        lose();
    } else if (player === 'scissors' && computer === 'paper') {
        win();
    }
}






// Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

// TDD a checkResult function that:

// Has two parameters: player and computer
// Returns one of the following values:
// draw - the throws are identical
// win - the player's throw beats the computer throw
// lose - the computer's throw beats the player's throw
// Write one test at a time, each test can address one of the nine possible outcomes.