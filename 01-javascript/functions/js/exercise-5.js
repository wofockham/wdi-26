// It's hot out! Let's make a converter.
//
// Create a function called celsiusToFahrenheit:
// - Store a celsius temperature into a variable.
// - Convert it to fahrenheit and output "NN°C is NN°F".
// - Create a function called fahrenheitToCelsius:
//
// Now store a fahrenheit temperature into a variable.
// - Convert it to celsius and output "NN°F is NN°C."

const celsiusToFahrenheit = function (celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  console.log(`${ celsius }°C is ${ fahrenheit }°F`);
  return fahrenheit;
}

const fahrenheitToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) / 1.8;
  console.log(`${ fahrenheit }°F is ${ celsius }°C`);
  return celsius;
}
