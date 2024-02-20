function showResult() {
    const length = +document.querySelector('input[name="length"').value
    const width = +document.querySelector('input[name="width"').value
    const height = +document.querySelector('input[name="height"').value
    const numberOfOrders = +document.querySelector('input[name="numberoforders"').value

    const answer = document.querySelector('.result__h1')
    let boxesByAsix = [0, 0, 0]
    let asixes = [length, width, height]
    let numberOfWagons = Infinity
    for (let i = 0; i < 3; i++) {
        boxesByAsix[i % 3] = Math.floor(asixes[(i) % 3] / 30)
        console.log(Math.floor(asixes[(i) % 3] / 30))
        // if (((boxesByAsix[i % 3] - 1) * 5 + (boxesByAsix[i % 3] * 30)) > width) {
        //     boxesByAsix[i % 3]--
        // }

        boxesByAsix[(i + 1) % 3]= Math.floor(asixes[(i+1) % 3] / 40)
        console.log(Math.floor(asixes[(i + 1) % 3] / 40))
        // if (((boxesByAsix[(i + 1) % 3] - 1) * 5 + (boxesByAsix[(i + 1) % 3] * 40)) > height) {
        //     boxesByAsix[(i + 1) % 3]--
        // }

        boxesByAsix[(i + 2) % 3] = Math.floor(asixes[(i+2) % 3] / 50)
        console.log(Math.floor(asixes[(i + 2) % 3] / 50))
        // if ((( boxesByAsix[(i + 2) % 3]- 1) * 5 + (boxesByAsix[(i + 2) % 3] * 50)) > length) {
        //     boxesByAsix[(i + 2) % 3]--
        // }

        console.log(boxesByAsix, asixes[i])
        tmp1 = Math.floor(asixes[(i + 1) % 3] / 50)
        // if ((tmp1 - 1) * 5 + (tmp1 * 50) > length) {
        //     tmp1--
        // }

        tmp2 = Math.floor(asixes[(i + 2) % 3] / 40)
        // if ((tmp2 - 1) * 5 + (tmp2 * 40) > height) {
        //     tmp2--
        // }

        if ((tmp1 * tmp2) > (boxesByAsix[(i + 1) % 3] * boxesByAsix[(i + 2) % 3])) {
            boxesByAsix[(i + 1) % 3] = tmp1
            boxesByAsix[(i + 2) % 3] = tmp2
        }
        console.log(boxesByAsix, asixes)
        
        let newNumberOfWagons = Math.ceil(numberOfOrders / (boxesByAsix[0] * boxesByAsix[1] * boxesByAsix[2]))

        if (newNumberOfWagons < numberOfWagons) {
            numberOfWagons = newNumberOfWagons
        }
    }
    if (numberOfWagons < 1) {
        numberOfWagons = 1
    }
    if (numberOfWagons > numberOfOrders) {
        answer.innerHTML = "Слишком большой груз"
    } else {
        answer.innerHTML = `Потребуется ${numberOfWagons} вагонов`
    }
}


const button = document.querySelector('.sendData')
button.addEventListener('click', showResult)