function counting() {
  const numberUser = document.querySelector(".data").value;
  let counter = 0
  for (let i = 0; i < numberUser.length; i++) {
    if (+numberUser[i] === 2) {
        counter++
    }
  }

  alert(counter)
}

document.querySelector('.check').addEventListener('click', counting)