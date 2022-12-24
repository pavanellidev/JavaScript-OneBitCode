function ola () {
   console.log("Olá, mundo!");
}

ola()

function dobro(x) {
   return x * 2
}

console.log(dobro(10));

function dizerOla(nome = "Caralho") {
   alert ("Olá, " + nome + "!")
}

dizerOla("joao");

function soma(a,b){
   alert("O resultado da soma é " + (a + b) + ".")
}

soma(13, 42);

function criarUsuario (nome, email, senha, tipo) {
   const usuario = {
      nome: nome,
      email: email,
      senha: senha,
      tipo: tipo
   }
   console.log(usuario)
}

criarUsuario("André", "trabalho7123@gmail.com", "123456", "")

