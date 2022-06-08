// Read the four values corresponding to the x and y axes of two points in the plane, p1 (x1, y1) and p2 (x2, y2) and calculate the distance between them, showing four decimal places after the comma, according to the formula:

// Distance = 

// Input
// The input file contains two lines of data. The first one contains two double values: x1 y1 and the second one also contains two double values with one digit after the decimal point: x2 y2.

// Output
// Calculate and print the distance value using the provided formula, with 4 digits after the decimal point.


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const distanciaEntreDoisPontos = (...lines) => {

    const [x1, y1] = lines[0].split(" ").map(Number);
    const [x2, y2] = lines[1].split(" ").map(Number);

    const distancia =  Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));  //Math.sqrt serve para fazer calculo de raiz
    
    return distancia;
}

const distancia = distanciaEntreDoisPontos(...lines);

console.log(distancia.toFixed(4));  