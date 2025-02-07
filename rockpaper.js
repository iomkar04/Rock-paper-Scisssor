let user_score = 0;
let comp_score = 0;
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");



const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const genCompChoice = () => {
    //rock paper scissor randomly generate 
    const options = ["rock", "paper", "scissor"];
    const idx = Math.floor(Math.random() * 3);
    return options[idx];
}
const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Draw , Play again !";
    msg.style.backgroundColor = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("u win");
        user_score++;
        userScorepara.innerText = user_score;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        // console.log("you lose");
        comp_score++;
        compScorepara.innerText = comp_score;
        msg.innerText = `You lose! Your ${userChoice} lost to ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    // console.log("user choice is ", userChoice);
    // console.log("comp choice is ",compChoice);
    if (userChoice === compChoice) {
        // console.log("its a draw !");
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? true : false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked !" ,userChoice);
        playGame(userChoice);
    })
})

































