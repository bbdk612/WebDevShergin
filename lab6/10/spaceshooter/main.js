import { Enemy } from "./jsClasses/Enemy.js";
import { Player } from "./jsClasses/Player.js";
import { Coin } from "./jsClasses/Coin.js";

let enemies = [];
let coin;

const keyConfig = {
  ArrowLeft: false,
  ArrowRight: false,
  ArrowUp: false,
  ArrowDown: false,
};

let player;

function generatePosition() {
  let possibleX = [-100, document.documentElement.clientWidth];
  let randomX = Math.round(Math.random());
  let x = possibleX[randomX];
  let y = Math.random() * document.documentElement.clientHeight + 100;
  // console.log(x, y)
  return { x: x, y: y };
}

function generateDirection(position) {
  let xa, xb;
  if (position.x < 0) {
    xa = Math.round(Math.random() * (5 - 1) + 1);
  } else {
    xa = Math.round(-(Math.random() * (5 - 1) + 1));
  }

  xb = position.x;

  let ya, yb;
  if (position.y < document.documentElement.clientHeight / 2) {
    ya = -(Math.random() * 5);
  } else {
    ya = Math.random() * 5;
  }

  yb = position.y;

  return { x: [xa, xb], y: [ya, yb] };
}

function keyHandlerStart(event) {
  let keys = Object.keys(keyConfig);
  if (keys.includes(event.key)) {
    keyConfig[event.key] = true;
  }
}

function keyHandlerStop(event) {
  let keys = Object.keys(keyConfig);
  if (keys.includes(event.key)) {
    keyConfig[event.key] = false;
  }
}

function initPlayer() {
  const gameArea = document.querySelector(".gameArea");

  player = new Player(5, {
    x: document.documentElement.clientWidth / 2 - 25,
    y: document.documentElement.clientHeight / 2 - 25,
  });

  gameArea.appendChild(player.getElement());
}

function initEnemies(numberOfEnemies = 5) {
  const gameArea = document.querySelector(".gameArea");

  for (let i = 0; i < numberOfEnemies; i++) {
    let position = generatePosition();
    let direction = generateDirection(position);
    let enemy = new Enemy(direction, position, 3);
    enemy.updatePosition();
    gameArea.appendChild(enemy.getElement());
    enemies.push(enemy);
  }
}

function initCoin() {
  coin = new Coin();
  coin.updatePosition();
  const gameArea = document.querySelector(".gameArea");
  gameArea.appendChild(coin.getElement());
}

function initGame(event) {
  console.log(event.code)
  if (event.code === "Enter") {
    document.querySelector(".dialog").style.display = "none";
    initPlayer();
    initEnemies();
    initCoin();
    document.querySelector('.score').innerHTML = "0"
    document.removeEventListener("keydown", initGame);
    document.addEventListener("keydown", keyHandlerStart);
    playGame();
  }
}

function stopGame() {
  document.querySelector(".gameArea").innerHTML = "";
  document.querySelector(".dialog").style.display = "flex";
  document.removeEventListener("keydown", keyHandlerStart)
  document.addEventListener("keydown", initGame);
  enemies = []
}

function moveEnemies() {
  enemies.forEach((enemy) => {
    if (
      enemy.position.x > document.documentElement.clientWidth ||
      enemy.position.x < -100 ||
      enemy.position.y > document.documentElement.clientHeight ||
      enemy.position.y < -100
    ) {
      let p = generatePosition();
      let d = generateDirection(p);
      enemy.position = p;
      enemy.direction = d;
      enemy.updatePosition();
      enemy.t = 0;
    } else {
      enemy.move();
    }
  });
}

function playGame() {
  moveEnemies();
  if (keyConfig.ArrowUp) {
    player.move("up");
  }
  if (keyConfig.ArrowLeft) {
    player.move("left");
  }
  if (keyConfig.ArrowRight) {
    player.move("right");
  }
  if (keyConfig.ArrowDown) {
    player.move("down");
  }

  enemies.forEach(enemy => {
    if (enemy.collide(player)) {
      stopGame()
    }
  })

  if (coin.collide(player)) {
    coin.generatePosition();
    coin.updatePosition();
    player.score++
    document.querySelector('.score').innerHTML = player.score
  }

  requestAnimationFrame(playGame);
}

document.addEventListener("keyup", keyHandlerStop);
document.addEventListener("keydown", initGame);
// initEnemies();
// moveEnemies();
