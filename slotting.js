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

// Declaration of variables to be used later, in step 4, i.e global variables:

const ROWS = 3;
const cols = 3;

// define number of symbols in each reel and their values :
// They symbols will be randomly distributed

const SYMBOLS_COUNT = {
    "A" : 2, // 
    "B" : 4,
    "c" : 6,
    "D" : 8
}

const SYMBOLS_VALUES = {
    "A" : 5, // E.g : If one gets a line of A, it is multiplied by 5
    "B" : 4,
    "C" : 3,
    "D" :2
}


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
};

//3. Collect a bet amount
// How game works? - The number of lines determine the Bet amount, whereby, 1 line  = least bet amount , 3 lines = highest bet amount
//The betAmount will actually be multiplied by the number of lines
// The maximum betAmount  you can bet is your balance divided by the number of lines.
const getBetAmount = (balance, NumberofLines) => {
    while (true){
        const bet = prompt("Enter amount to bet with: ");
        const betAmount = parseFloat(bet);

        if(isNaN(betAmount) || betAmount <= 0 || betAmount > balance / NumberofLines){
            console.log("Invalid Bet, try again.");
        }else {
            return betAmount;
        }
    }
};

//4. Spinning slot machine - use earlier declared variables :

const spin = () => {
    //generate an array with all the possible symbols we can have :
    const symbols = [];
    for (const [symbol,count] of Object.entries(SYMBOLS_COUNT)) {
        
        
        for (let i = 0; i < count; i++) {
            symbols.push(symbol);
        }
    }
    //console.log(symbols); // Test to make sure the data of SYMBOLS_COUNT is pushed into array.

// each reel will have 3 values, generated from symbols array
    const reels  = [[],[],[]];
    for (let i = 0; i < cols;i++) {
        const reelSymbols = [...symbols]; // Generate from available symbols then remove them for that specific reel.
        for (let j = 0; j <ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelSymbols.length)
            const selectedSymbol =  reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex, 1);
        }
    }
    return reels;
};

const reels = spin();

// Initializing the functions

let balance = deposit();
const NumberofLines = getNumberofLines();
const bet = getBetAmount(balance,NumberofLines);

// Printing the inputs 

console.log("Number of Lines: ",NumberofLines)
console.log("Bet Amount: ", bet)

// To run, Use "node filename.js" at terminal, and prompt will be initiated for whatever function.

