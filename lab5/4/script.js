function requirsiveSum(arr, i) {
    if (i === arr.length - 1) {
        return arr[i]
    }

    return arr[i] + requirsiveSum(arr, i + 1)
}

function elemantalSum(arr, i) {
    if (i === arr.length) {
        return [requirsiveSum(arr, 0)]
    }

    let sum = [requirsiveSum(arr.slice(0, i), 0)]

    return sum.concat(elemantalSum(arr, i + 1))

}

let arr = [1, 2, 3, 4, 5, 6]
console.log(elemantalSum(arr, 1))