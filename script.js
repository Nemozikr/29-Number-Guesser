let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
function generateTarget(){
  const random = Math.floor(Math.random() * 10);
  console.log(`Random ${random}`)
  return random;
}
function compareGuesses(userInput, computerInput, guessed){
  const userDifference = getAbsoluteDistance(userInput, guessed);
  const compDifference = getAbsoluteDistance(computerInput, guessed);
  if (userInput === computerInput){
    return true;
  }
  if (userDifference < compDifference){
    return true;
  }else{
    return false;
  }
}
function getAbsoluteDistance(input, guess){
  return  (Math.abs(guess - input));
}
function updateScore(winner){
  if (winner === 'human'){
    humanScore++;
  }else if(winner === 'computer'){
    computerScore++;
  }else{
    console.log(`Invalid string input: ${winner}`)
  }
}
function advanceRound(){
  currentRoundNumber++;
}
function validCheck(input){ //the validity checker from game.js
    console.log(`input value ${input.value}`);
    if (input.value % 1 != 0){
        window.alert('Your number is not whole');
        return false;
    }
    if (input.value < 0){
        input.value = 0;
        window.alert('Your number is below 0!'); //window alert pops up to tell user why they cant press the button
        return false;
    }else if(input.value >10){
        input.value = 10;
        window.alert('Your number is above 10!');
        return false;
    }else{
        return true;
    }
}




