// Read three values (variables A, B and C), which are the three student's grades. Then, calculate the average, considering that grade A has weight 2, grade B has weight 3 and the grade C has weight 5. Consider that each grade can go from 0 to 10.0, always with one decimal place.

// Input
// The input file contains 3 values of floating points (double) with one digit after the decimal point.

// Output
// Print the message "MEDIA"(average in Portuguese) and the student's average according to the following example, with a blank space before and after the equal signal.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0]);
const B = Number(lines[1]);
const C = Number(lines[2]);

const media = (A * 2 + B * 3 + C * 5) / 10;

console.log("MEDIA = " + media.toFixed(1));
