/*USANDO COMMONJS (CJS)
// Importa solo una vez:
const generateName = require("sillyname"); // Para generar nombres.
const superheroes = require("superheroes"); // Para superhéroes.

const sillyName = generateName(); // Genera un nombre aleatorio.
console.log(`My name is ${sillyName}.`);

const superheroName = superheroes.random(); // Genera un nombre de superhéroe aleatorio.
console.log(`I am ${superheroName}!`);
*/
//USANDO EMS
// Importa solo una vez:
import generateName from "sillyname"; // Para generar nombres.
import superheroes, { randomSuperhero } from "superheroes"; // Para superhéroes.

const sillyName = generateName(); // Genera un nombre aleatorio.
console.log(`My name is ${sillyName}.`);

const superheroName = randomSuperhero(); // Genera un nombre de superhéroe aleatorio.
console.log(`I am ${superheroName}!`);
