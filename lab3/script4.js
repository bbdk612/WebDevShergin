function showResult() {
    const length = +document.querySelector('input[name="length"').value
    const width = +document.querySelector('input[name="width"').value
    const height = +document.querySelector('input[name="height"').value
    const numberOfOrders = +document.querySelector('input[name="numberoforders"').value

    const answer = document.querySelector('.result__h1')
    let boxesByAsix = [0, 0, 0]
    let numberOfWagons = Infinity
    for (let i = 0; i < 3; i++) {
        boxesByAsix[i % 3] = Math.floor(width / 30)
        if (((boxOnWidth - 1) * 5 + (boxOnWidth * 30)) > width) {
            boxOnWidth--
        }

        boxesByAsix[(i + 1) % 3]= Math.floor(height / 40)
        if (((boxOnHeight - 1) * 5 + (boxOnHeight * 30)) > height) {
            boxOnHeight--
        }

        boxesByAsix[(i + 2) % 3] = Math.floor(length / 50)
        if (((boxOnLength - 1) * 5 + (boxOnLength * 30)) > length) {
            boxOnLength--
        }
        
        let newNumberOfWagons = Math.ceil(numberOfOrders / (boxesByAsix[0] * boxesByAsix[1] * boxesByAsix[2]))

        if (newNumberOfWagons < numberOfWagons) {
            numberOfWagons = newNumberOfWagons
        }
    }

    answer.innerHTML = `Потребуется ${numberOfWagons} вагонов`
}


const button = document.querySelector('.sendData')
button.addEventListener('click', showResult)