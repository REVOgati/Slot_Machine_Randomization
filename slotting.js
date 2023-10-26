// use of npm init in the terminal to create a directory to node.js

// Use of "npm i prompt-sync" for prompting functions- enables installing packages

// Building project

//1. Deposit money
//2. Determine number of lines/rows to bet
//3. Collect a bet amount
//4.Spin slot machine
//5. Check if user won or lost
//6. Give user their wins if they won
//7. User plays again or quits

//Step 1 - Deposit money

/* - Alternative way to make function, 
function deposit(){

}*/

const prompt = require("prompt-sync")(); // Used to initiate prompt connecting to a function 

//2nd way to make function(we use it) - 

const deposit = () => {
    const depositAmount = prompt("Enter a deposit Amount: ")
    const numberDepositAmount = parseFloat(depositAmount); - // To convert input, StringNumeric to a floating point number : gives Nan for non- numbers.

    // Incase input is not a number or is <=0 - console.log rollsback input and user has to try again
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid Deposit Amount, try again");
    }
    
};

deposit();

// To run, Use "node filename.js" at terminal, and prompt will be initiated for deposit.
