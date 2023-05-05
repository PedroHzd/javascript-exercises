const sumAll = function(initialNumber, finalNumber) {

    let summation;

    if (!(typeof initialNumber === `number`) || !(typeof finalNumber === `number`)) {
        return `ERROR`; 
    } else if (initialNumber <= 0 || finalNumber <= 0 ) {
        return `ERROR`;
    }

    if (initialNumber > finalNumber) {
        summation = (initialNumber * (initialNumber + 1)) / 2;
    } else {
        summation = (finalNumber * (finalNumber + 1)) / 2;
    }

    return summation;
};

console.log(sumAll(1, 999999999));

// Do not edit below this line
module.exports = sumAll;
