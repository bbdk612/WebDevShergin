const circle = document.querySelector('.circle')

circle.addEventListener('mouseout', () => {
    circle.style.backgroundColor = 'red'
})

circle.addEventListener('mouseover', () => {
    circle.style.backgroundColor = 'green'
})
