let fibonacciArray = [1, 1];

const fibonacci = function(numberOfSequence) {
    if (numberOfSequence <= 0) {return `OOPS`};

    let index = parseFloat(numberOfSequence) - 1;
    let number = parseFloat(numberOfSequence);

    if (number <= fibonacciArray.length) {
        return fibonacciArray[index];
    } else {
        console.log(fibonacciArray.length);
        let missingNumber = number - fibonacciArray.length;
        pushFibNumber(missingNumber);
        return fibonacciArray[index]
    }
    //the function first checks if the fibonacci requested is in the array.
    //if it is present, return the number.
    //if not, push all calculated fibonacci numbers until the number requested.
    //I think this is more efficient because it doesnt have to calculate
    //  the fibonacci number every time the function is called.
};

let pushFibNumber = (amountOfTimes) => {
    let length = fibonacciArray.length;
    let firstNumber = length - 1;
    let secondNumber = length - 2;

    for (let i = 0; i < amountOfTimes; i++) {
        fibonacciArray.push(fibonacciArray[firstNumber] + fibonacciArray[secondNumber]);
        firstNumber++;
        secondNumber++;
    }
    //this function pushes fibonacci numbers to the global fibonacciArray
}

// Do not edit below this line
module.exports = fibonacci;
