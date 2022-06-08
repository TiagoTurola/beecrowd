// Make a program that reads three floating point values: A, B and C. Then, calculate and show:
// a) the area of the rectangled triangle that has base A and height C.
// b) the area of the radius's circle C. (pi = 3.14159)
// c) the area of the trapezium which has A and B by base, and C by height.
// d) the area of ​​the square that has side B.
// e) the area of the rectangle that has sides A and B.

// Input
// The input file contains three double values with one digit after the decimal point.

// Output
// The output file must contain 5 lines of data. Each line corresponds to one of the areas described above, always with a corresponding message (in Portuguese) and one space between the two points and the value. The value calculated must be presented with 3 digits after the decimal point.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [A, B, C] = input.split(" ").map(item => parseFloat(item));
const pi = 3.14159;

const triangulo = (A * C) / 2.0;
const circulo = pi * Math.pow(C, 2);
const trapezio = ((A + B) * C) / 2.0;
const quadrado = B * B;
const retangulo = A * B;

console.log("TRIANGULO: " + triangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
