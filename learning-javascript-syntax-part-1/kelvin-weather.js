// project 1

// holds the kelvin constant
const kelvin = 293

let celsius = kelvin - 273;

let fahrenheit = celsius * ( 9 / 5 ) + 32;

fahrenheit = Math.floor( fahrenheit );

console.log( `The temperature is ${fahrenheit} degrees Fahrenheit` )