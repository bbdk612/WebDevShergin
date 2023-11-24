function generarteText() {
  const words = [
    "Got",
    "ability",
    "shop",
    "recall",
    "fruit",
    "easy",
    "dirty",
    "giant",
    "shaking",
    "ground",
    "weather",
    "lesson",
    "almost",
    "square",
    "forward",
    "bend",
    "cold",
    "broken",
    "distant",
    "adjective.",
  ];

  const numberOfWords = Math.round(Math.random() * (10 - 1) + 1);
  let stt = "";
  for (let i = 0; i < numberOfWords; i++) {
    let word = words[Math.round(Math.random() * (words.length - 1 - 0) + 0)];
    if (i == numberOfWords - 1) {
      stt += word;
    } else {
      stt += word + " ";
    }
  }

  return stt;
}

let timerForText = 1000;
let letterTime = 1000;
let text = "";
let timer;

function closeDialog() {
  document.querySelector(".dialog").style.display = "none";
  text = generarteText();
  document.querySelector(".textForUser").innerHTML = text;
  timerForText = letterTime * text.length;
  document.querySelector('input[name="userInput"').focus();
  timer = setTimeout(gameOver, timerForText);
  document
    .querySelector('input[name="userInput"')
    .addEventListener("keydown", (e) => {
      if (e.code == "Enter") {
        let userText = document.querySelector('input[name="userInput"').value;
        if (userText === text) {
          clearTimeout(timer);
          text = generarteText();
          document.querySelector(".textForUser").innerHTML = text;
          document.querySelector('input[name="userInput"').value = "";
          letterTime *= 0.9;
          timerForText = letterTime * text.length;
          timer = setTimeout(gameOver, timerForText);
        } else {
          console.log("wrong text");
          clearTimeout(timer);
          gameOver();
        }
      }
    });
}

function startGame() {
  timer = setTimeout(gameOver, timerForText);
  document
    .querySelector('input[name="userInput"')
    .addEventListener("keydown", () => {
      if (userText === text) {
        clearTimeout(timer);
        text = generarteText();
        document.querySelector(".textForUser").innerHTML = text;
        letterTime *= 0.9;
        timerForText = letterTime * text.length;
        timer = setTimeout(gameOver, timerForText);
      } else {
        clearTimeout(timer);
        gameOver();
      }
    });
}

function gameOver() {
  document.querySelector(".dialog").style.display = "flex";
  letterTime = 1000;
  document.querySelector('input[name="userInput"').value = "";
}

document
  .querySelector(".dialog__button")
  .addEventListener("click", closeDialog);
