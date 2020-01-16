import foeThrow from './foeThrow.js';
export default checkResult;

function checkResult() {
    const player = document.querySelector('input:checked').value;
    const computer = foeThrow();
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    } else if (player === 'paper' && computer === 'rock') {
        return 'lose';
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
}