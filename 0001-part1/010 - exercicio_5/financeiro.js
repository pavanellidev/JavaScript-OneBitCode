let saldo = prompt("Informe a quantidade de dinheiro");
saldo = parseFloat(saldo);
let opcao = "";

do {
   opcao = prompt(
     "Saldo disponível: R$ " + saldo +
     "\n1. Adicionar dinheiro" +
     "\n2. Remover dinheiro" +
     "\n3. Sair" 
   )

   switch (opcao) {
      case "1":
         saldo += parseFloat (prompt("Informe o valor a adiconar:"));
         break
      case "2":
         saldo -= prompt("Informe o valor a remover");
         break;
      case "3":
         alert("Encerrando...") 
         break
      default:
         alert("Opção inválida.")  
   }

} while (opcao !== "3");