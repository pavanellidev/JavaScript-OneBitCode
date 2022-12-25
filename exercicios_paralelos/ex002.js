function menu () {
   return prompt(
      "1. Olá\n" +
      "2. Oi\n" +
      "3. Blz?\n" +
      "4. Sair"
   )
}

function executar(){
   let opcao = ""

   do {
      opcao = menu ()
      let resultado

   switch (opcao) {
      case "1": 
      alert("Olá")
      break
      case "2":
      alert("Oi")
      break
      case "3":
      alert("Blz?")
      break
      case "4":
      alert("Encerrando...")
      break
      default:
      alert("Opção inválida")
   }

   if (resultado) {
      alert(resultado)
   }
   } while (opcao !== "4")
   
}

executar();