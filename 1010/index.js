// In this problem, the task is to read a code of a product 1, the number of units of product 1, the price for one unit of product 1, the code of a product 2, the number of units of product 2 and the price for one unit of product 2. After this, calculate and show the amount to be paid.

// Input
// The input file contains two lines of data. In each line there will be 3 values: two integers and a floating value with 2 digits after the decimal point.

// Output
// The output file must be a message like the following example where "Valor a pagar" means Value to Pay. Remember the space after ":" and after "R$" symbol. The value must be presented with 2 digits after the point.

const item1 = Number(lines[0]);
const item2 = Number(lines[1]);

const qtditem1 = item1[1];
const valoritem1 = item1[2];
const valortotal1 =  qtditem1 * valoritem1;

const qtditem2 = item2[1];
const valoritem2 = item2[2];
const valortotal2 =  qtditem2 * valoritem2;

const total = valortotal1 + valortotal2;