function evenCheck(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] % 2 != 0) {
            return false
        }
    }

    return true
}

document.querySelector('.dataSend').addEventListener('click', () => {
    const arrSTR = document.querySelector('input').value.split(' ')
    alert(evenCheck(arrSTR))
})