const convertToCelsius = function(fahrenheit) {
           let resultBeforeRround = (fahrenheit - 32) * (5/9);
           return Math.round(resultBeforeRround * 10) / 10;

};

const convertToFahrenheit = function(celsius) {
       let resultBeforeRround = celsius * (9/5) + 32;
       return Math.round(resultBeforeRround * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
