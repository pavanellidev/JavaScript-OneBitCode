let pokemon = "Charmander";

function evoluir() {
   pokemon = "Charmeleon"
}

console.log(pokemon);
evoluir();
console.log(pokemon);

function avaliarNota(nota) {
   if (nota > 60) {
      return "Aprovado"
   } else {
      return "Reprovado"
   }
}

console.log(avaliarNota(83));

console.log(avaliarNota(45));