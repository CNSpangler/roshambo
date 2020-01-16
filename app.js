import checkResult from './checkResult.js';
import foeThrow from './foeThrow.js';
import { getRandomNumber } from './foeThrow.js';
import { win, lose, draw } from './checkResult.js';

const rumble = document.getElementById('rumble');
const reset = document.getElementById('reset');
const player = document.querySelector('.input:checked');
const winLose = document.getElementById('winLose');
const computer = getRandomNumber(3);
const playedCount = document.getElementById('playedCount');
const winCount = document.getElementById('winCount');
let count = 0;
let wins = 0;

rumble.addEventListener('click', () => {
    winLose.textContent = '';
    count++;
    playedCount.textContent = count;
    foeThrow();
    checkResult(player, computer);
    // Need a separate isWinner function w boolean result? e.g. if isWin === true
    if (checkResult === win()) {
        wins++;
    };
    winCount.textContent = wins;
});

reset.addEventListener('click', () => {
    count = 0;
    wins = 0;
})