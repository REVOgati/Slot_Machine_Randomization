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
    while (true) {
        const deposit = prompt("Enter a deposit Amount: ");
        const depositAmount = parseFloat(deposit);
        // Incase input is not a number or is <=0 - console.log rollsback input and user has to try again
        if (isNaN(parseFloat(depositAmount)) || parseFloat(depositAmount) <= 0) {
            console.log("Invalid Deposit Amount, try again");
        } else {
            return depositAmount;
        }
    }

};

// Step 2 : Get Number of Lines 
const getNumberofLines = () =>{
    while (true) {
        const NumberofLinesInput = parseFloat(prompt("Enter number of Lines(1,2,or 3): "));

        if(isNaN(NumberofLinesInput) || NumberofLinesInput <= 0 || NumberofLinesInput >3) {
            console.log("Invalid Number of Lines input, try again");
        }
        else{
            return NumberofLinesInput;
        }
    }
}

//3. Collect a bet amount

const getBetAmount = (balance) => {
    while (true){
        const bet = prompt("Enter amount to bet with: ");
        const betAmount = parseFloat(bet);

        if(isNaN(betAmount) || betAmount <= 0 || betAmount > balance){
            console.log("Invalid Bet Amount, try again.");
        }else {
            return betAmount;
        }
    }
}

// Initializing the functions

let balance = deposit();
const NumberofLines = getNumberofLines();
const bet = getBetAmount();

// Printing the inputs 

console.log("Deposit Amount: ",depositAmount)
console.log("Number of Lines: ",NumberofLines)
console.log("Bet Amount: ", bet)

// To run, Use "node filename.js" at terminal, and prompt will be initiated for whatever function.
