const removeFromArray = function(arrayFromUser, ...otherArguments) {
    outside:
    for (let i = 0; i < arrayFromUser.length; i++) {
        for (let j = otherArguments.length; j >= 0; j--) {
            if (arrayFromUser.toString() === otherArguments.toString()) {
                arrayFromUser = [];
                break outside;
            } else if (arrayFromUser[i] === otherArguments[j]) {
                arrayFromUser.splice(i, 1);
            }
        }
    }

    return arrayFromUser;
};


console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;
