const x = 15;
const y = 15;

main = document.querySelector('main')

main.style.gridTemplateRows = `repeat(${x}, 1fr)`
main.style.gridTemplateColumns = `repeat(${y}, 1fr)`

for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
        main.innerHTML += `<span>${i + 1}*${j + 1}=${(i + 1) * (j + 1)}</span>`
    }
}
