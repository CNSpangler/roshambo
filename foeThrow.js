export default foeThrow;
export { getRandomNumber };

// I used MDN as a template for getRandomNumber
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function foeThrow() {
    const randomNumber = getRandomNumber(3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}