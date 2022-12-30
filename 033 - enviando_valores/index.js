function register(element) {
   const username = element.children.username.value
   const password = element.children.password.value
   const passwordConfirmation = element.children.passwordConfirmation.value

   if (passwordConfirmation === password) {
      alert("Usuário " + username + " registrado!")
   } else {
      alert("Senhas não conferem")
   }
}