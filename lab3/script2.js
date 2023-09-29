function showResult () {
    const numberOfWeek = +document.querySelector('input[name="numberdayofweek"]').value

    const answer = document.querySelector('.result__h1')

    switch (numberOfWeek) {
        case 1:
            answer.innerHTML = 'Понедельник'
            break
        
        case 2:
            answer.innerHTML = 'Вторник'
            break
        
        case 3:
            answer.innerHTML= 'Среда'
            break

        case 4:
            answer.innerHTML = 'Четверг'
            break
    
        case 5:
            answer.innerHTML = 'Пятница'
            break
        
        case 6:
            answer.innerHTML = 'Суббота'
            break

        case 7:
            answer.innerHTML = 'Boскресенье'
            break

        default:
            answer.innerHTML = "Ты где такой день недели видел"
            break
    }
}

const button = document.querySelector('.sendData')
button.addEventListener('click', showResult)