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
const playerWeapon = document.getElementById('playerWeapon');
const computerWeapon = document.getElementById('computerWeapon');

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
});

reset.addEventListener('click', () => {
    count = 0;
    wins = 0;
    winLose.textContent = '';
    winCount.textContent = wins;
    playedCount.textContent = count;
})