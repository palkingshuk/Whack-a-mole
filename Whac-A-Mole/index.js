const squares = document.querySelectorAll(".square")
const timeLeft = document.querySelector("#time-left")
const scoreDisplay = document.querySelector("#score")
// const mole = document.querySelector(".mole")
function startGame() {

    let result = 0;
    let timerId
    let hitPosition
    let countDownTimerId
    let currentTime = 10
    timeLeft.textContent = currentTime
    scoreDisplay.textContent = result
    function randomSquare() {
        squares.forEach(square => {
            square.classList.remove('mole')
        })
        let randomPosition = squares[Math.floor(Math.random() * 9)]
        randomPosition.classList.add('mole')

        hitPosition = randomPosition.id
    }
    
    function squareClickHandler() {
        if (this.id === hitPosition) {
            result++;
            scoreDisplay.textContent = result;
            hitPosition = null;
        }
    }
    squares.forEach(square => {
        square.addEventListener('mousedown', squareClickHandler);
    });

    function moveMole() {
        timerId = setInterval(randomSquare, 600);
    }
    moveMole()

    function countDown() {
        currentTime--;
        timeLeft.textContent = currentTime
        if (currentTime == -1) {
            // countDownTimerId = NULL;
            clearInterval(countDownTimerId)
            alert("Game Over !! Your Final score is: " + result)
            clearInterval(timerId)
            squares.forEach(square => {
                square.removeEventListener('mousedown', squareClickHandler);
            });
            timeLeft.textContent = 0;
        }
    }

    countDownTimerId = setInterval(countDown, 1000)
}

var clicked = true;
function clicker()
{
    clicked = true;
}
function game() {

   setInterval(clicker,11000)

   if(clicked)
   {
    startGame();
    clicked = false
   }
   else
   {
    alert("Error !!")
   }
  
}
