function requirsiveSum(arr, i) {
    if (i === arr.length - 1) {
        console.log()
        return arr[i]
    }

    return arr[i] * requirsiveSum(arr, i + 1)
}

arr = [1, 2, 3, 4, 5, 6]
console.log(requirsiveSum(arr, 0))