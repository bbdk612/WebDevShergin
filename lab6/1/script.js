const inputWithText = document.querySelector('input.insertInside')

function insertTextToInput() {
    document.querySelector('input.insertInside').value = 'Lorem ipsum dolor sit amet.'
}

function lockField() {
    let lockButton = document.querySelector('.lockContent')
    if (inputWithText.disabled) {
        inputWithText.disabled = false
        lockButton.innerHTML = 'Разблокировано'
    } else {
        inputWithText.disabled = true
        lockButton.innerHTML = 'Заблокировано'
    }
}


document.querySelector('.action').addEventListener('click', insertTextToInput)
document.querySelector('.lockContent').addEventListener('click', lockField)
document.querySelector('.hideContent').addEventListener('click', () => {
    if (inputWithText.getAttribute('type') === 'text') {
        inputWithText.setAttribute('type', 'password')
        document.querySelector('.hideContent').innerHTML = 'Скрыто'
    } else {
        inputWithText.setAttribute('type', 'text')
        document.querySelector('.hideContent').innerHTML = 'Доступно'
    }
})
document.querySelector('.hideField').addEventListener('click', () => {
    if (inputWithText.style.display === 'flex') {
        inputWithText.style.display = 'none'
        document.querySelector('.hideField').innerHTML = 'Показать поле'
    } else {
        inputWithText.style.display = 'flex'
        document.querySelector('.hideField').innerHTML = 'Скрыть поле'
    }
})
