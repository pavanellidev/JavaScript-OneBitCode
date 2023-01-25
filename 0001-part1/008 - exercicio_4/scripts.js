let tourist = prompt("Qual é o seu nome?");
let question = prompt("Você já visitou alguma cidade?(sim/não)");

let cidades = ""
let contagem = 0


while (question === "sim") {
   let cidade = prompt("Qual o nome da cidade visitada?");
   cidades += " - " + cidade + "\n";
   contagem++;
   question = prompt("Você visitou alguma outra cidade? (sim/não)");
}

console.log(
   "Turista: " + tourist +
   "\nQuantidade de cidades visitadas: " + contagem +
   "\nCidades visitadas:\n" + cidades
);

