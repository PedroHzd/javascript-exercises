const convertToCelsius = function(fahrenheit) {
  let notRounded = (fahrenheit - 32) * (5 / 9);
  return rounding(notRounded, 1);
};

const convertToFahrenheit = function(celsius) {
  let notRounded = (celsius * (9/5)) + 32;
  return rounding(notRounded, 1);
};

const rounding = function(number, precision = 0) {
  let numberOfDigits = Math.pow(10, precision);
  return Math.round(number * numberOfDigits) / numberOfDigits;
  //This function removes any trailing zeros (but works with negatives)
  //rounding(12.00, 2) returns 12
  //rounding(12.01, 2) returns 12.01
  //If you want the trailing zeros use toFixed(the number of digits you want)
  //rounding(12.00, 2).toFixed(2) returns "12.00"
  //  WARNING - toFixed() returns a string 
  //use parseFloat() to covert it back to a number (removes trailing zeros)
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
