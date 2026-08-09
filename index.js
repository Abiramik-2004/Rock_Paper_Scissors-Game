let playerScore = 0;
let computerScore = 0;
let roundsLeft = 5;
   function game(playerChoice){
    if (roundsLeft === 0) return; 
    const choices=["ROCK","PAPER","SCISSOR"];
    let result="",resultColor="";
    const computerChoice=choices[Math.floor(Math.random()*3)];
    if(playerChoice==computerChoice){
        result="It's is a tie!";

    }
    else if(( playerChoice==="ROCK"&&computerChoice==="SCISSOR")||
    ( playerChoice==="PAPER"&&computerChoice==="ROCK")||
    ( playerChoice==="SCISSOR"&&computerChoice==="PAPER")){
        result="YOU WON";
        playerScore++;
    }
    else{
        result="COMPUTER WON";
        computerScore++;
    }
    roundsLeft--;

   document.getElementById("playerScore").textContent = playerScore;
   document.getElementById("computerScore").textContent = computerScore;
   document.getElementById("roundsLeft").textContent = roundsLeft;

   document.getElementById("result").innerHTML=`YOU CHOSE:<b>${playerChoice}</b>&nbsp;&nbsp;
    COMPUTER CHOSE:<b>${computerChoice}</b><br><span style="color: ${result === "YOU WON" ? "green" : result === "COMPUTER WON" ? "red" : "black"};
    font-weight:bold">${result}</span>`;

    if (roundsLeft === 0) {
        if (playerScore>computerScore) {
         startConfetti();
         }

                let finalMessage = "";
                if (playerScore > computerScore) {
                    finalMessage = `<span style="color: green; font-weight: bold;"> CONGRATULATIONS! YOU WON THE GAME!</span>`;
                } else if (computerScore > playerScore) {
                    finalMessage = `<span style="color: red; font-weight: bold;">COMPUTER WINS! BETTER LUCK NEXT TIME!</span>`;
                } else {
                    finalMessage = `<span style="color: black; font-weight: bold;"> IT'S A DRAW! WELL PLAYED! </span>`;
                }

                document.getElementById("result").innerHTML += `<br><br>${finalMessage}`;
                document.querySelector(".restart").style.display = "block"; // Show restart button
            }
   }

   function restartGame() {
            playerScore = 0;
            computerScore = 0;
            roundsLeft = 5;
            document.getElementById("playerScore").textContent = playerScore;
            document.getElementById("computerScore").textContent = computerScore;
            document.getElementById("roundsLeft").textContent = roundsLeft;
            document.getElementById("result").innerHTML = "";
            document.querySelector(".restart").style.display = "none"; // Hide restart button
        }

    function startConfetti() {
        confetti({
        particleCount: 1500, 
        spread: 500,        
        origin: { y: 0} 
    });
}
