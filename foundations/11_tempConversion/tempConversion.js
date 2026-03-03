const convertToCelsius = function(fahrenheit) {
           let resultBeforeRround = (fahrenheit - 32) * (5/9);
           return Math.round(resultBeforeRround * 10) / 10;

};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
