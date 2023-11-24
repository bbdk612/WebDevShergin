const questions = [
    "Как найти работу в Москве?",
    "Как научиться программированию на Java?",
    "Как найти работу в Санкт-Петербурге?",
    "Как научиться играть на гитаре для начинающих?",
    "Как найти работу в Новосибирске?",
    "Как научиться играть на гитаре для детей?",
    "Как найти работу в Екатеринбурге?",
    "Как научиться играть на гитаре для взрослых?",
    "Как найти работу в Красноярске?",
    "Как научиться играть на гитаре для женщин?",
    "Как найти работу в Нижнем Новгороде?",
    "Как научиться играть на гитаре для мужчин?",
    "Как найти работу в Уфе?",
    "Как найти работу в Самаре?",
    "Как найти работу в Воронеже?",
    "Как найти работу в Кемерово?",
    "Как найти работу в Краснодаре?",
    "Как приготовить вкусный пирог с яблоками?",
    "Что такое линк на GitHub?",
    "Как научиться играть на гитаре?",
    "Какие достопримечательности стоит посетить в Риме?",
    "Как найти работу в сфере IT?",
    "Как стать программистом?",
    "Как выбрать лучший ноутбук для работы?",
    "Как сделать селфи с боке?",
    "Как посмотреть фильм онлайн?",
    "Как найти ближайший ресторан итальянской кухни?",
]

function workWithText() {
    document.querySelector(".main__spans").innerHTML = ''
    const userText = document.querySelector(".userInput").value.toLowerCase()
    for (let i = 0; i < questions.length; i++) {
        let re = new RegExp(userText)
        if (questions[i].toLowerCase().search(re) != -1) {
            let arrStr = questions[i].toLowerCase().split(re)
            let str = '<span class="answer">' + arrStr.join("<b>"+ userText +"</b>") + "</span>"
            document.querySelector(".main__spans").innerHTML += str    
        }
    }

    document.querySelectorAll(".answer").forEach((answer) => {
        answer.addEventListener('click', (event) => {
            document.querySelector(".userInput").value = event.target.innerText
        })
    })
}

document.querySelector(".userInput").addEventListener('keydown', workWithText)

