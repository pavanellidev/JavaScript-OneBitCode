function register(ev) {
   console.log(ev)
   const sectionElement = ev.currentTarget.parentNode
   const username = sectionElement.children.username.value
   const password = sectionElement.children.password.value
   const passwordConfirmation = sectionElement.children.passwordConfirmation.value

   if (password === passwordConfirmation) {
      alert("Usuário " + username + " registrado!")
   } else {
      alert("As senhas não conferem.")
   }
}

const buttonEl = document.getElementById('register-button');

buttonEl.addEventListener('click', register)

function removeEvent() {
   buttonEl.removeEventListener('click', register)
   alert('Event Removed')
}

