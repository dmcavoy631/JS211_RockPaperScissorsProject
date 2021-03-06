// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  // Write code here
  // Use the unit test to see what is expected
  hand1 = hand1.trim().toLowerCase();
  hand2 = hand2.trim().toLowerCase();

  // Null check
  if (hand1 == false || hand1 === null){
    console.log("Hand 1, You didnt play a hand");
  }else if (hand2 == false || hand2 === null){
    console.log("Hand 2, You didnt play a hand");
  };

  //Pass results back
  let result;


  if (hand1 === hand2){
    result = "It's a tie!";
    return result;

    
  } else if ((hand1 == 'paper' && hand2 == 'rock' ) || (hand1 == 'rock' && hand2 == 'scissors') || (hand1 == 'scissors' && hand2 == 'paper' )) {
    // All the conditions for Hand 1 to win.
    result = "Hand one wins!";
    return result;


  } else if ((hand2 == 'paper' && hand1 == 'rock') || (hand2 == 'rock' && hand1 == 'scissors' ) || (hand2 == 'scissors' && hand1 == 'paper')) {
    // All the conditions for Hand 2 to win.
    result = "Hand two wins!";
    return result;
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
      assert.equal(rockPaperScissors('rock ', ' sCiSsOrs '), "Hand one wins!");
    });
    it('Null/Undefined/false no entery', () => {
      assert.equal(rockPaperScissors(keycode.names[13], 'paper'), "Hand 1, You didnt play a hand");
    });
  });
} else {
  getPrompt();
}