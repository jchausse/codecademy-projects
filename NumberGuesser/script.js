let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Helper function

const getAbsoluteDistance = (value1,value2) => {
    return Math.abs(value1-value2);
};

const generateTarget = () => {
    return Math.floor(Math.random()*10);
};

const compareGuesses = (userGuess, computerGuess, targetNumber) => {

    if(userGuess < 0 || userGuess > 9)
        alert("Invalid Entry");
    //return true if user wins, else return false
    if(getAbsoluteDistance(userGuess,targetNumber)<=getAbsoluteDistance(computerGuess,targetNumber))
        return true;
    else 
        return false;
};

const updateScore = (winner) => {
    if(winner === 'human')
        humanScore++;
    else // should be 'computer'
        computerScore++;
};

const advanceRound = () => {
    currentRoundNumber++;
};
