function range(start, stop, step = 1) {
    let arr = []
    if (start > stop && step < 0) {
        for (let i = start; i >= stop; i += step) {
            arr.push(i)
        }
    } else {
        for (let i = start; i <= stop; i += step) {
            arr.push(i)
        }
    }
    return arr
}

console.log(range(1, 10, -1))