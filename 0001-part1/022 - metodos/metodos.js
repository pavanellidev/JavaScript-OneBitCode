let pessoa = {
   nome: "André",
   idade: 35,
   dizerOla(){
      console.log("Olá, " + this.nome)
   }
}

console.log(pessoa);

pessoa.dizerOla()