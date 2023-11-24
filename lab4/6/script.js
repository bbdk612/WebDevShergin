function anagram(str1, str2) {
    if (str1 === str2) {
        return true;
    }

    if (str1.length !== str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        const re = new RegExp(`${str1[i]}`);

        let countLetter1 = (str1.match(re) || []).length;
        let countLetter2 = (str2.match(re) || []).length;

        if (countLetter1 !== countLetter2) {
            return false;
        }
    }

    return true;
}

function getData() {
    const str1 = document.querySelector('input[name="str1"').value;
    const str2 = document.querySelector('input[name="str2"').value;

    alert(anagram(str1, str2));
}

document.querySelector(".check").addEventListener("click", getData);
