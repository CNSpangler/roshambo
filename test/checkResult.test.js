import checkResult from '../checkResult.js';

const test = QUnit.test;

test('identical rock throws should return draw', function(assert) {
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('identical paper throws should return draw', function(assert) {
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('identical scissors throws should return draw', function(assert) {
    const player = 'scissors';
    const computer = 'scissors';
    const expected = 'draw';
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player rock computer paper = lose', function(assert) {
    const player = 'rock';
    const computer = 'paper';
    let expected = ('lose');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player rock computer scissors = win', function(assert) {
    const player = 'rock';
    const computer = 'scissors';
    let expected = ('win');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player paper computer rock = win', function(assert) {
    const player = 'paper';
    const computer = 'rock';
    let expected = ('win');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player paper computer scissors = lose', function(assert) {
    const player = 'paper';
    const computer = 'scissors';
    let expected = ('lose');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player scissors computer rock = lose', function(assert) {
    const player = 'scissors';
    const computer = 'rock';
    let expected = ('lose');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});

test('player scissors computer paper = win', function(assert) {
    const player = 'scissors';
    const computer = 'paper';
    let expected = ('win');
    const result = checkResult(player, computer);
    assert.equal(expected, result);
});




// Given a user choice, and a random throw for the computer, we will need to know the game result (from the user's perspective): "win", "lose", or "draw"

// TDD a checkResult function that:

// Has two parameters: player and computer
// Returns one of the following values:
// draw - the throws are identical
// win - the player's throw beats the computer throw
// lose - the computer's throw beats the player's throw
// Write one test at a time, each test can address one of the nine possible outcomes.

// You can assume valid input, meaning the passed input will always be a valid throw of rock, paper, or scissors.
