function textChecker() {
    let userText = document.querySelector('.insertInside').value
    if (userText !== '') {
        alert(`Вы ввели ${userText}`)
    } else {
        alert("Вы ничего не ввели")
    }
}

document.querySelector('.action').addEventListener('click', textChecker)