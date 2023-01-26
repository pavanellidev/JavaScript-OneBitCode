class User {
  constructor(fullName, email, password) {
    this.fullName = fullName
    this.email = email
    this.password = password
  }

  login(email, password) {
    if (email === this.email && password === this.password) {
      console.log(`Bem vindo ${this.fullName}`)
    } else {
      console.log(`Dados inválidos`)
    }
  }
}

let pessoa = new User ('André Mariano', 'pavanellidev@gmail.com', 'senha123')

console.log(pessoa)

pessoa.login('pavanellidev@gmail.com', 'senha123')