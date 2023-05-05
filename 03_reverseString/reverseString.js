const reverseString = function(stringFromUser) {
    let characterArray = stringFromUser.split("");
    let numOfCycles = characterArray.length;
    let newArray = [];

    for(let i = 0; i < numOfCycles; i++) {
        newArray.push(characterArray.pop());
    }

    let joinedString = newArray.join("");

    return joinedString;
};

// Do not edit below this line
module.exports = reverseString;
