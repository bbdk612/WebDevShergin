let figures = document.querySelectorAll('.figure')
let redFigures = []
let greenFigures = []
console.log(redFigures)
figures.forEach((figure) => {
    figure.style.backgroundColor = 'red'
    redFigures.push(figure)
    figure.addEventListener('click', (event) => {
        if (event.target.style.backgroundColor === 'red') {
            event.target.style.backgroundColor = 'green'
            greenFigures.forEach((elemet) => {
                elemet.style.backgroundColor = 'red'
                greenFigures.splice(greenFigures.indexOf(elemet), 1)
                redFigures.push(elemet)
            })
            redFigures.splice(redFigures.indexOf(event.target), 1)
            greenFigures.push(event.target)
            console.log(greenFigures)
        } else {
            event.target.style.backgroundColor = 'red'
            greenFigures.splice(greenFigures.indexOf(event.target), 1)
            redFigures.push(event.target)
        }
    })
})