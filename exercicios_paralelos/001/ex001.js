function soma() {
   const num1 = parseFloat(prompt("Informe um número:"));
   const num2 = parseFloat(prompt("Informe outro número:"));
   return num1 + num2;
}

function subtracao() {
   const num1 = prompt("Informe um número:");
   const num2 = prompt("Informe outro número:");
   return num1 - num2;
}

function multiplicacao() {
   const num1 = prompt("Informe um número:");
   const num2 = prompt("Informe outro número:");
   return num1 * num2;
}

function divisao (){
   const num1 = prompt("Informe um número:");
   const num2 = prompt("Informe outro número:");
   return num1 / num2;
}


function menu () {
   return prompt(
      "Calculadora simples:\n" +
      "1. Realizar soma:\n" +
      "2. Realizar subtração:\n" +
      "3. Realizar multiplicação:\n" +
      "4. Realizar divisão:\n" +
      "5. Sair"
   )
}

function executar () {
   let opcao = ""

   do {
      opcao = menu()
      let resultado

      switch (opcao) {
         case "1":
         resultado = soma();
         break
         case "2":
         resultado = subtracao();
         break
         case "3":
         resultado = multiplicacao();
         break
         case "4":
         resultado = divisao();
         break
         case "5":
         alert("Saindo...");
         break
         default:
         alert("Opção inválida")
      }

      if (resultado) {
         alert("O resultado é: " + resultado)
      }
   } while (opcao !== "5")

}

executar();



