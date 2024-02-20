const car = document.createElement("div"),
  score = document.querySelector(".score"),
  gameArea = document.querySelector(".gameArea");

const gameConfig = {
  speed: 5,
  traffic: 3,
  score: 0,
  started: true,
  numberOfLines: 4,
  lines: [],
  score: 0,
};

const keysChecker = {
  ArrowLeft: false,
  ArrowRight: false,
};

let gameAreaCoordinates = gameArea.getBoundingClientRect();

function numberOfObjectsByHeight(objectHeight) {
  return document.documentElement.clientHeight / objectHeight + 1;
}

function setLinesForMoving() {
  let shiftLines = gameArea.offsetWidth / gameConfig.numberOfLines;
  let j = 0;
  for (let i = shiftLines / 2; i < gameArea.offsetWidth; i += shiftLines) {
    gameConfig.lines[j] = i;
    j++;
  }
}

function startMoving(event) {
  event.preventDefault();
  let keys = Object.keys(keysChecker);
  if (keys.includes(event.code)) {
    keysChecker[event.code] = true;
  }
}

function stopMoving(event) {
  event.preventDefault();
  let keys = Object.keys(keysChecker);
  if (keys.includes(event.key)) {
    keysChecker[event.key] = false;
  }
}

function userCarInit(startLine = 1) {
  car.setAttribute("class", "userCar");

  car.x = gameConfig.lines[startLine] - 25;
  car.y = document.documentElement.clientHeight * 0.75;

  car.style.top = car.y + "px";
  car.style.left = car.x + "px";
  car.currentLine = startLine;
  // console.log(userCar.x);

  gameArea.appendChild(car);
}

function initEnemies() {
  for (let i = 0; i < numberOfObjectsByHeight(100 * gameConfig.traffic); i++) {
    let enemie = document.createElement("div");
    enemie.setAttribute("class", "badCar");
    enemie.y = -100 * gameConfig.traffic * (i + 1);
    enemie.style.top = enemie.y + "px";

    let randomLine =
      gameConfig.lines[
        Math.round(Math.random() * (gameConfig.numberOfLines - 1))
      ];
    enemie.style.left = randomLine - 25 + "px";
    gameArea.appendChild(enemie);
  }
}

function moveEnemy() {
  let enemies = document.querySelectorAll(".badCar");
  enemies.forEach((enemy) => {
    let carRect = car.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();

    if (
      carRect.bottom >= enemyRect.top &&
      carRect.right >= enemyRect.left &&
      carRect.left <= enemyRect.right &&
      carRect.top <= enemyRect.bottom
    ) {
      stopGame();
    }

    enemy.y += gameConfig.speed / 2;
    enemy.style.top = enemy.y + "px";

    if (enemy.y >= document.documentElement.clientHeight + 100) {
      enemy.y = -100 * gameConfig.traffic;
      let randomLine = Math.round(
        Math.random() * (gameConfig.numberOfLines - 1)
      );
      enemy.style.left = gameConfig.lines[randomLine] - 25 + "px";
    }
  });
}

function playGame(event) {
  if (gameConfig.started) {
    moveEnemy();
    gameConfig.score += 0.08;
    score.innerHTML = Math.round(gameConfig.score * 10);
    gameConfig.speed = 10 * (1 + gameConfig.score / 100);
    if (keysChecker.ArrowLeft)
      if (car.currentLine >= 1) {
        car.currentLine--;
        car.y = gameConfig.lines[car.currentLine] - 25;
        car.style.left = car.y + "px";
        keysChecker.ArrowLeft = false;
      }
    if (keysChecker.ArrowRight) {
      if (car.currentLine < gameConfig.lines.length - 1) {
        car.currentLine++;
        car.y = gameConfig.lines[car.currentLine] - 25;
        car.style.left = car.y + "px";
        keysChecker.ArrowRight = false;
      }
    }

    requestAnimationFrame(playGame);
  }
}

function stopGame() {
  gameConfig.started = false;
  document.removeEventListener("keydown", startMoving);
  document.addEventListener("keydown", startGame);
  document.querySelector(".dialog").classList.toggle("hide");
}

function startGame(event) {
  if (event.key === "Enter" || event.type === "mousedown") {
    gameConfig.score = 0;
    score.innerHTML = 0;
    document.querySelector(".gameArea").innerHTML = "";
    console.log("ok");
    setLinesForMoving();
    initEnemies();
    userCarInit();
    gameConfig.started = true;
    playGame();
    document.removeEventListener("keydown", startGame);
    document.addEventListener("keydown", startMoving);
    document.querySelector(".dialog").classList.toggle("hide");
  }
}

document.addEventListener("keydown", startGame);
document
  .querySelector(".dialogWindow")
  .addEventListener("mousedown", startGame);
document.addEventListener("keyup", stopMoving);
document.querySelector(".arrowLeft").addEventListener("mousedown", () => {
  keysChecker.ArrowLeft = true;
});
document.querySelector(".arrowRight").addEventListener("mousedown", () => {
  keysChecker.ArrowRight = true;
});
// TODO: Написать перемещение по линиям игрока
// TODO: Напимать перемещение противников строго вниз
