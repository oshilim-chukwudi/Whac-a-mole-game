const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
TimeLeft = document.getElementById("time-left");
scoreBoard = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 60;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 500);
}
moveMole();

function countDown() {
  currentTime--;
  TimeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownTimerID);
    clearInterval(timerId);
    alert("Game Over! Your Final score is" + result);
  }
}

let countDownTimerID = setInterval(countDown, 1000);
