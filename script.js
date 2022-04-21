let mainContent = document.getElementById("mainContent");
var userName = "";
var selectedQuote = "";
var quoteSource = "";
// var isUserCorrect;
let userPoints = 0;             
let computerPoints = 0;



// on-click function to start game

function startGame(){
    userName = getUserName();
    getRandomQuote();
}


// Get quote - API Calls section

function getRandomQuote(){             // gets quote and triggers event that resets game
    let randomNumber = Math.random();
    if (randomNumber <= .5){
        console.log("displaying michael quote");
        return ["michael", getMichaelQuote()];
    } else {
        console.log("displaying ron quote");
        return ["ron", getRonQuote()];
    }
}

function getRonQuote() {  
    quoteSource = "ron";    
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')   // Access-Control-Allow-Origin should be set to * to allow all requests
        .then(response => {
            return response.json();
        })
        .then(response => {console.log(response);
            return response;
            })
        .then(quote => displayGame(quote));
        }



function getMichaelQuote(){
    quoteSource = "michael";
    fetch('https://michael-scott-api.herokuapp.com/v1/quotes')   // Access-Control-Allow-Origin should be set to * to allow all requests
        .then(response => {
            return response.json();
        })
        .then(response => {console.log(response);
            return response;
            })
        .then(quote => displayGame(quote));
    }

// makes/displays the game board

function displayGame(quote) {
    mainContent.innerHTML="";

    createScoreBoard();

    let displayQuoteCard = document.createElement("div");
    displayQuoteCard.setAttribute("class", "card");

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    cardBody.innerHTML = quote;

    displayQuoteCard.appendChild(cardBody);

    mainContent.appendChild(displayQuoteCard);
    
    // mainContent.innerHTML = quoteCard;

    let buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "buttonContainer");
    mainContent.appendChild(buttonContainer);

    let chooseMichael = document.createElement("button");
    chooseMichael.setAttribute("id", "michaelButton");
    chooseMichael.setAttribute("value", "michael");
    chooseMichael.setAttribute("class", "user-guess");
    chooseMichael.innerText = "Michael Scott";
    chooseMichael.addEventListener("click", checkUserInput)
    chooseMichael.userGuess = "michael"
    buttonContainer.appendChild(chooseMichael);

    let chooseRon = document.createElement("button");
    chooseRon.setAttribute("id", "ronButton");
    chooseRon.setAttribute("value", "ron")
    chooseRon.setAttribute("class", "user-guess");
    chooseRon.innerText = "Ron Swanson";
    chooseRon.addEventListener("click", checkUserInput)
    chooseRon.userGuess = "ron"
    buttonContainer.appendChild(chooseRon);
}


// collect userName

let getUserName =()=> prompt("Hi! Let's start. The goal is to guess who said the quote displayed. When you are ready close this box");

// Scoreboard functions

function createScoreBoard(){                                  // called by displayGame
    scoreBoardContainer = document.createElement("div");
    scoreBoardContainer.setAttribute("id", "scoreboard-container");

    userScore = document.createElement("div");
    userScore.setAttribute("id", "user-score");
    userScore.innerHTML = `${userName}: ${userPoints}`;
    scoreBoardContainer.appendChild(userScore)

    computerScore = document.createElement("div");
    computerScore.setAttribute("id", "computer-score");
    computerScore.innerHTML = `Game: ${computerPoints}`;
    scoreBoardContainer.appendChild(computerScore);

    mainContent.appendChild(scoreBoardContainer);          // possible to return the scoreboard container and call function in displayGame?

}

function updateScoreBoard(isUserCorrect){        // called by check user input 
    if (isUserCorrect === true){
        userPoints = userPoints + 1;
        console.log(`user score is ${userPoints}`);
    } else {
        computerPoints = computerPoints + 1;
        console.log(`computerScore is ${computerPoints}`);
    }
}


// Check user input

let guessButtons = document.getElementsByClassName("user-guess");


function checkUserInput(event){
    console.log(`checking input: ${event.currentTarget.userGuess}`);
    console.log(`event targer userGuess: ${event.currentTarget.userGuess}`);
    console.log(`quote source: ${quoteSource}`);
    if (event.currentTarget.userGuess == quoteSource) {
        alert("you are right!");
        updateScoreBoard(true)
        getRandomQuote();
    } else {
        alert("wrong answer!");
        updateScoreBoard(false);
        getRandomQuote();
    }
}

function resetGame(){
    userPoints = 0;
    computerPoints = 0
    getRandomQuote();
}



// greet user, explain game                                                     V
// Collect user name                                                            V
// Start button                                                                 V
// Display Scoreboard with userName and Game                                    V
// pull quote:                                                                  V
    // Math.random --- if <= 0.5 Ron Quote, if > Michael Scott quote            V
    // save quoteSource                                                         V
// Generate game page --- display quote, provide two buttons for each choice    V
// Check userResponse against quoteSource                                       V
// Generate response -- Either "Correct" or "Wrong Answer"                      V
    //** bonus generate picture of source with quote */
// Update scoreboard