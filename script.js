let mainContent = document.getElementById("mainContent");
var userName = "";
var selectedQuote = "";
var quoteSource = [];

// on-click function to start game

function startGame(){
    userName = getUserName();
    quoteSource = getRandomQuote();
}


// Get quote - API Calls section

function getRandomQuote(){
    let randomNumber = Math.random();
    if (randomNumber <= .5){
        return ["Michael", getMichaelQuote()];
    } else {
        return ["Ron", getRonQuote()]
    }
}

function getRonQuote() {      
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')   // Access-Control-Allow-Origin should be set to * to allow all requests
        .then(response => {
            return response.json();
        })
        .then(response => {
            return response;
            })
        .then(quote => displayGame(quote));
        }



function getMichaelQuote(){
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
    chooseMichael.innerText = "Michael Scott";
    buttonContainer.appendChild(chooseMichael);

    let chooseRon = document.createElement("button");
    chooseRon.setAttribute("id", "ronButton");
    chooseRon.innerText = "Ron Swanson";
    buttonContainer.appendChild(chooseRon);
}


// collect userName

let getUserName =()=> prompt("Hi! Let's start. The goal is to guess who said the quote displayed. When you are ready close this box");



// greet user, explain game              V
// Collect user name                     V
// Start button                          V
// Display Scoreboard with userName and Game
// pull quote:                           V
    // Math.random --- if <= 0.5 Ron Quote, if > Michael Scott quote 
    // save quoteSource
// Generate game page --- display quote, provide two buttons for each choice
// Check userResponse against quoteSource 
// Generate response -- Either "Correct" or "Wrong Answer" 
    //** bonus generate picture of source with quote */
// Update scoreboard