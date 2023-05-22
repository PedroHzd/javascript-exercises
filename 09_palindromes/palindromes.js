const palindromes = (string) => {
    //This removes any characters that are not a-z like numbers, punctuation, and spaces
    let newString = string.toLowerCase().replace(/[^a-z]/g, "");
    let halfStringLength = Math.floor(newString.length / 2);

    for (let i = 0; i < halfStringLength; i++) {
        if (newString[i] !== newString[newString.length - i - 1]) {
            return false
        }
    }
    return true;
    //the for loop checks the first character with the last character
}

// Do not edit below this line
module.exports = palindromes;
