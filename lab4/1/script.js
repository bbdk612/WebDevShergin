let str = ''

for (let i = 1; i < 6; i++) {
    if (i == 1) {
        str += ' '.repeat(9) +'#\n'
    }
    else {
        str += ' '.repeat(10 - i) + '#' + "0".repeat(i-2) + '#\n'
    }
}

for (let i = 4; i > 0; i--) {
    if (i == 1) {
        str += ' '.repeat(9) + '#'
    } else {
        str += ' '.repeat(10 - i) + '#' + "0".repeat(i-2) + '#\n'
    }
}

document.querySelector('pre').innerHTML = str