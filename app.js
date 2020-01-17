import checkResult from './checkResult.js';
import foeThrow from './foeThrow.js';

const rumble = document.getElementById('rumble');
const reset = document.getElementById('reset');
const winLose = document.getElementById('winLose');
const playedCount = document.getElementById('playedCount');
const winCount = document.getElementById('winCount');
let count = 0;
let wins = 0;
winCount.textContent = wins;
playedCount.textContent = count;
const playerImg = document.getElementById('playerImg');
const computerImg = document.getElementById('computerImg');

rumble.addEventListener('click', () => {
    winLose.textContent = '';
    count++;
    playedCount.textContent = count;
    const player = document.querySelector('input:checked').value;
    const computer = foeThrow();
    playerWeapon.textContent = player;
    computerWeapon.textContent = computer;
    const result = checkResult(player, computer);
    if (result === 'draw') {
        winLose.textContent = 'It\'s a draw!';
    } else if (result === 'win') {
        winLose.textContent = 'You won!';
        wins++;
    } else if (result === 'lose') {
        winLose.textContent = 'You lost!';
    }
    winCount.textContent = wins;

// show player result images instead of text
    if (player === 'rock') {
        playerImg.src = './assets/rock.png';
    } else if (player === 'paper') {
        playerImg.src = './assets/paper.png';
    } else if (player === 'scissors') {
        playerImg.src = './assets/scissors.png';
    };
// show computer results image instead of text
    if (computer === 'rock') {
        computerImg.src = './assets/rock.png';
    } else if (computer === 'paper') {
        computerImg.src = './assets/paper.png';
    } else if (computer === 'scissors') {
        computerImg.src = './assets/scissors.png';
    }
});

reset.addEventListener('click', () => {
    count = 0;
    wins = 0;
    winLose.textContent = '';
    winCount.textContent = wins;
    playedCount.textContent = count;
    playerWeapon.textContent = '';
    computerWeapon.textContent = '';
})