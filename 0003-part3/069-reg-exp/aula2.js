const { texto } = require('./base')
const regExp1 = /João|Maria/gi;

console.log(texto);
console.log(texto.match(regExp1));
console.log(texto.replace(/João/gi, 'Felipe'));