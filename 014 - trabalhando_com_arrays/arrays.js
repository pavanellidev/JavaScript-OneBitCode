const arr = [
   "Frodo",
   "Sam",
   "Merry",
   "Pippin",
   "Gandalf",
   "Aragorn",
   "Legolas",
   "Gimli",
];

let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

tamanho = arr.unshift("Galadriel");
console.log(arr);
console.log(tamanho);

const ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

const primeiroElemento = arr.shift();
console.log(arr);
console.log(primeiroElemento);

const inclui = arr.includes("Gandalf");
console.log(inclui);

const indice = arr.indexOf('Gandalf');
console.log(indice);

const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(hobbits);
console.log(outros);

const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento");
console.log(sociedade);
console.log(elementosRemovidos);

for (let indice = 0; indice < sociedade.length; indice++) {
   const elemento =  sociedade[indice];
   console.log(elemento + ' se encontra na posição ' + indice)
}