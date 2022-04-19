let mainContent = document.getElementById("mainContent");
let name = "";


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

    let chooseMichael = document.createElement("button");
    chooseMichael.setAttribute("id", "michaelButton")
    chooseMichael.innerText = "Michael Scott";
    mainContent.appendChild(chooseMichael);

    let chooseRon = document.createElement("button");
    chooseRon.setAttribute("id", "ronButton")
    chooseRon.innerText = "Ron Swanson";
    mainContent.appendChild(chooseRon);
}

let getUserName =()=> prompt("Hi! Let's start. The goal is to guess who said the quote displayed. When you are ready close this box");

function startGame(){
    console.log(getUserName());
    playGame();
}

function playGame(){
    console.log(`playgame triggered`);
    // get quote
    displayGame();
} 






// greet user, explain game
// Collect user name
// Start button
// Display Scoreboard with userName and Game
// pull quote:
    // Math.random --- if <= 0.5 Ron Quote, if > Michael Scott quote 
    // save quoteSource
// Generate game page --- display quote, provide two buttons for each choice
// Check userResponse against quoteSource 
// Generate response -- Either "Correct" or "Wrong Answer" 
    //** bonus generate picture of source with quote */
// Update scoreboard

