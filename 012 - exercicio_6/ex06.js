let numero = prompt("Digite um número:");
let resultado = ""



for (let tabuada = 1; tabuada <= 20 ; tabuada++) {
   resultado += " -> " + numero + " * " + tabuada + " = " + (numero * tabuada) + "\n"
}

console.log("Resultado da tabuada de: " + numero + "\n\n" +resultado);