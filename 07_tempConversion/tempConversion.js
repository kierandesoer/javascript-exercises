const convertToCelsius = (n) => {
  return Math.round(((n - 32 ) *5/9) * 10) / 10;
};

const convertToFahrenheit = (n) => {
  return Math.round(((n * 9 / 5) + 32) * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
