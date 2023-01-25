let opcao = ""
 
do {
   opcao = prompt("Escolha uma opção:\n1-Hamburger \n2-Refrigerante \n3-Milk Shake \n4-Batata Frita \n5-Encerrar");

   switch (opcao){
      case "1":
         alert("Você escolheu Hamburger");
         break;
      case "2":
         alert("Você escolheu Refrigerante");
         break;
      case "3":
         alert("Você escolheu Milk Shake");
         break;
      case "4":
         alert("Você escolheu Batata Frita");
         break;
      case "5":
         alert("Você escolheu Encerrar");
         alert("Encerrando...");
         break;
      default:
         alert("Opção inválida.")
   }

} while(opcao !== "5");

