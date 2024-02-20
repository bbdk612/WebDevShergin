function generateTable(data) {
    let keys = Object.keys(data[0])
    let tableHead = '<tr>' 
    for (let i = 0; i < keys.length; i++) {
        tableHead += `<td>${keys[i]}</td>`
    }
    tableHead += '</tr>'
    document.querySelector('thead').innerHTML = tableHead
    
    let tableBody = ''
    
    for (let i = 0; i < data.length; i++) {
        let values = Object.values(data[i])
        tableBody += '<tr>'
        for (let j = 0; j < values.length; j++) {
            tableBody += `<td>${values[j]}</td>`
        }
        tableBody += '</tr>'
    }

    document.querySelector('tbody').innerHTML = tableBody
}

let cats = [
    {name: "Tomas", color: "Black", sex: "M", age: 1},
    {name: "Rodion", color: "Green", sex: "M", age: 4},
    {name: "Samandra", color: "Blue", sex: "F", age: 3},
    {name: "Katya", color: "Orange", sex: "F", age: 6},
]

generateTable(cats)