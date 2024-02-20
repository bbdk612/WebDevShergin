alert('Тык на кнопку, чтобы текст ссылки поменялся')

let str_ = "https://youtube.com"

const changeLinkText = () => {
  const link = document.querySelector('.link')
  link.innerHTML = 'Произошла замена ссылки'
  link.setAttribute('href', str_)
}

const button = document.querySelector('.button-fortext')
button.addEventListener('click', changeLinkText)
