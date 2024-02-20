function myFiltration(arr, obj) {
    let keys = Object.keys(obj)
    let resultArr = []
    for (let i = 0; i < arr.length; i++) {
        let checker = false
        for (let j = 0; j < keys.length; j++) {
            if (arr[i][keys[j]] === obj[keys[j]]) {
                checker = true
            } else {
                checker = false
            }
        }

        if (checker) {
            resultArr.push(arr[i])
        }
    }

    return resultArr
}

let cats = [
    {name: "Tomas", color: "Black", sex: "M", age: 1},
    {name: "Rodion", color: "Green", sex: "M", age: 4},
    {name: "Samandra", color: "Blue", sex: "F", age: 4},
    {name: "Katya", color: "Orange", sex: "F", age: 6},
]

console.log(myFiltration(cats, {sex: "M", color: "Black"}))