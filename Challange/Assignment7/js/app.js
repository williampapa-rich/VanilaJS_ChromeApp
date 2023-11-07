const rangeNumberForm = document.getElementById("rangeNumber-form");
const rangeNumberInput = document.getElementById("rangeNumberInput");
const guessNumberForm = document.getElementById("guessNumber-form");
const guessNumberInput = document.getElementById("guessNumberInput");
const playButton = document.getElementById("playBtn");
const resultPannel = document.querySelector("#resultPannel");
const resultString = document.querySelector("#resultPannel p:first-child");
const resultScore = document.querySelector("#resultPannel p:last-child");

let maximumNumber = null;
let guessingNumber = null;
let riddleNumber = null;


function setRangeNumber(event) {
    event.preventDefault();
    let rangeNumber = parseInt(rangeNumberInput.value);
    if(rangeNumber<=0) {
        alert("The maximum number of the range should be greater than 0.");
    } else {
        maximumNumber = rangeNumber;
        //console.log(maximumNumber);
}
    
}

function getRiddleNumber(){
    riddleNumber = parseInt(Math.ceil(Math.random()*maximumNumber));
    console.log(riddleNumber);
}


function setGuessNumber(event) {
    event.preventDefault();
    let guessNumber = parseInt(guessNumberInput.value);
    if(guessNumber>maximumNumber){
        alert(`The guessing number should be in the ragne between 0 and ${maximumNumber}.`);
    } else if(guessNumber<0) {
        alert("The guessing number should be greater then 0.")
    } else {
     guessingNumber = guessNumber;
     
     //console.log(guessingNumber);
    }
    
}

function matchingGame() {
    getRiddleNumber();
    resultPannel.classList.remove("hidden");
    resultString.innerText = `You chose: ${guessingNumber}, the machine chose: ${riddleNumber}`;
      if(riddleNumber==guessingNumber) {
        resultScore.innerText = "You won!"
      } else {
        resultScore.innerText = "You lost!"
      }
    }


    


rangeNumberForm.addEventListener("submit", setRangeNumber);
guessNumberForm.addEventListener("submit", setGuessNumber);
playButton.addEventListener("click", matchingGame);
