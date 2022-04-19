let mainContent = document.getElementById("mainContent");
var userName = "";
var selectedQuote = "";



// makes the game board
function displayGame() {
    mainContent.innerHTML="";
    let quoteCard = `
        <div class="card">
            <div class="card-body">
                This is some text within a card body.
            </div>
        </div>
    `

    mainContent.innerHTML = quoteCard;

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


// on-click function to start game

function startGame(){
    userName = getUserName();
    playGame();
}

function playGame(){
    console.log(`playgame triggered`);
    // get quote
    displayGame();
} 


// API Calls section


function getRonQuote() {      
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')   // Access-Control-Allow-Origin should be set to * to allow all requests
    .then(response => response.json())
    .then(data => console.log(data))
}

function getMichaelQuote(){
    fetch('https://michael-scott-api.herokuapp.com/v1/quotes')   // Access-Control-Allow-Origin should be set to * to allow all requests
    .then(response => response.json())
    .then(data => console.log(data))
}

getMichaelQuote();









// greet user, explain game              V
// Collect user name                     V
// Start button                          V
// Display Scoreboard with userName and Game
// pull quote:
    // Math.random --- if <= 0.5 Ron Quote, if > Michael Scott quote 
    // save quoteSource
// Generate game page --- display quote, provide two buttons for each choice
// Check userResponse against quoteSource 
// Generate response -- Either "Correct" or "Wrong Answer" 
    //** bonus generate picture of source with quote */
// Update scoreboard

