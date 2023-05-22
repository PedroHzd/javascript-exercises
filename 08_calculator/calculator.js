const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => {
  if (array === []) {
    return 0;
  } else if (array.length === 1) {
    return array[0];
  }
// the if statement is not necessary
  return array.reduce((sum, number) => sum + number, 0);
};

const multiply = (array) => array.reduce((total, number) => total * number, 1);

const power = (a, b) => a ** b;

const factorial = (number) => {
  return number <= 1 ? 1 : number * factorial(number - 1);
} ;

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
