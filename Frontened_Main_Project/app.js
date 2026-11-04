let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playGame = document.querySelector(".play-game");
let start = document.querySelector(".box-wrap");
let yourMove = document.querySelector(".your-move");
let compMove = document.querySelector(".comp-move");
let answer = document.querySelector("#win-status");
let rotateImage = document.querySelector("#rotate");
let won = document.querySelector(".won");
let lost = document.querySelector(".lost");
let draw = document.querySelector(".draw");
let scoreBox = document.querySelector("#score-box");
let playAgain = document.querySelector(".play-again");
let restart = document.querySelector(".restart");


function getCompChoice(){
    let num = Math.floor(Math.random()*3);
    let play = ["rock", "paper", "scissors"];
    return play[num];
}


function animation(){
    rotateImage.style.animation = "rotate 1s ease-in-out forwards";
}


function playRound(userChoice){

    start.classList.add("hidden");
    playGame.classList.remove("hidden");
    scoreBox.style.marginTop = "1.5rem";

    yourMove.src = `rock-mirror.png`;
    compMove.src = `rock.png`;

    answer.innerText = "Fighting...";

    yourMove.classList.add("shake-rock");
    compMove.classList.add("shake-rock");
    
    setTimeout(()=>{

        yourMove.classList.remove("shake-rock");
        compMove.classList.remove("shake-rock");

        let compChoice = getCompChoice();

        yourMove.src = `${userChoice}-mirror.png`;
        compMove.src = `${compChoice}.png`;

    if(userChoice === compChoice){
        console.log("Draw");
        answer.innerText = "Its a Draw!";
        draw.innerText ++;
        return;
    }

    if(
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ){
        console.log("Congrats! You Win.");
        answer.innerText = "Congrats! You Win.";
        won.innerText++;
    }else{
        console.log("You Lose! Try Again.");
        answer.innerText = "You Lose, Try Again!";
        lost.innerText++;
    }
}, 1000);
}

rock.addEventListener("click", ()=> playRound("rock"));
paper.addEventListener("click", ()=> playRound("paper"));
scissors.addEventListener("click" , ()=> playRound("scissors"));

playAgain.addEventListener("click", ()=>{
    playGame.classList.add("hidden");
    start.classList.remove("hidden");
    scoreBox.style.marginTop = "4.5rem";
});

restart.addEventListener("click", ()=>{
    location.reload();
});































// rock.addEventListener("click", ()=>{
//     userChoice = play[0];
//     console.log(userChoice);
//     if(comChoice === userChoice){
//     console.log("draw");
//     }else if(comChoice === "paper"){
//         console.log("computer wins");
//     }else{
//         console.log("you wins");
//     }
// });

// paper.addEventListener("click", ()=>{
//     userChoice = play[1];
//     console.log(userChoice);
//     if(comChoice === userChoice){
//     console.log("draw");
//     }else if(comChoice === "rock"){
//         console.log("you wins");
//     }else{
//         console.log("computer wins");
//     }
// });

// scissors.addEventListener("click", ()=>{
//     userChoice = play[2];
//     console.log(userChoice);
//     if(comChoice === userChoice){
//     console.log("draw");
//     }else if(comChoice === "paper"){
//         console.log("you wins");
//     }else{
//         console.log("computer wins");
//     }
// });