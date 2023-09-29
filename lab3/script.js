function createAnswer () {
  const lastname = document.querySelector('input[name="lastname"]').value
  const firstname = document.querySelector('input[name="firstname"]').value
  const secondname = document.querySelector('input[name="secondname"]').value
  const age = document.querySelector('input[name=age]').value

  const answer = document.querySelector('.result__h1')

  if (+age <= 7) {
    answer.innerHTML = `Привет, ${firstname}`
  } else if (+age <= 18) {
    answer.innerHTML = `Здравствуй, ${lastname}`
  } else {
    answer.innerHTML = `Здравствуйте, ${firstname} ${secondname}`
  }
}

const button = document.querySelector('.sendData')
button.addEventListener('click', createAnswer)
