// In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [idItem1, qtditem1, valoritem1] = lines[0].split(" ").map(Number);
const [idItem2, qtditem2, valoritem2] = lines[1].split(" ").map(Number);

const valortotal1 =  qtditem1 * valoritem1;
const valortotal2 =  qtditem2 * valoritem2;

const total = valortotal1 + valortotal2;

console.log("VALOR A PAGAR: R$ " + total.toFixed(2));