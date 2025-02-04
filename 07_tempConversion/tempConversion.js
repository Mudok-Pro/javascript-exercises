const convertToCelsius = function(tempF) {
  let celsius = (tempF - 32)* 5/9 ;
  let roundedNumber1 = Math.round(celsius *10)/10;
  return roundedNumber1;
};

const convertToFahrenheit = function(tempC) {
  let fahrenheit = tempC * 9/5 + 32;
  let roundedNumber2 = Math.round(fahrenheit *10)/10;
  return roundedNumber2;
};
console.log(convertToCelsius(32))
console.log(convertToCelsius(100))
console.log(convertToCelsius(-100))
console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(73.3))
console.log(convertToFahrenheit(-10))
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};




