function createAnswer() {
  const number1 = document.querySelector('input[name="number1"]').value
  const number2 = document.querySelector('input[name="number2"]').value

  const answer = document.querySelector('.result__h1')
  if (number2 != 0) {
    if ((+number1 % +number2) !== 0) {
      answer.innerHTML = `Результат деления: ${Math.floor(+number1 / +number2)}; </h1>` +
        `<h1>Остаток: ${+number1 % +number2}`
    } else {
      answer.innerHTML = `Результат деления: ${Math.floor(+number1 / +number2)};`
    }
  } else {
      answer.innerHTML = "На ноль делить низя"
  }
}

const button = document.querySelector('.sendData')
button.addEventListener('click', createAnswer)
