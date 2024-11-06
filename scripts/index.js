// Create your game here!
const maxTries = 5;
const displayTries = document.getElementById("attempts")
var triesleft=0
startGame()
function startGame() {
    const answer = Math.floor(Math.random() * 10);
    // promptUser();
    let numTries = 0;
    while (numTries < maxTries) {
       // promptUser(answer);
       
        let answered = setTimeout(promptUser(answer), 0); 
        console.log(answered,'here')
        if (!answered){
            break;
        }
        numTries++;
        triesleft=maxTries - numTries
       
        console.log("User is on try " + numTries);
    }
}

function promptUser(answer) {
    let userNum = prompt("Please enter a number from 1 - 10");
    console.log(userNum);

    console.log(answer);
    if (userNum !== null) {
        if (userNum === answer) {
            alert("You guessed it right!");2
        }
        else if (userNum > answer) {
            alert("Your guess is too high");
        }
        else if (userNum < answer) {
            alert("Your guess is too low");
        }
    }
    else {
        alert("You did not guess anything");
         displayTries.textContent = "Your have " + triesleft + "left..."
        return false;
    }
     displayTries.textContent = "Your have " + triesleft + "left..."
     console.log(displayTries.textContent )
    return true;
}