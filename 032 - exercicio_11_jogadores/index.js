function escalar() {
   const playerSection = document.getElementById('players-list')

   const h3 = document.createElement('h3')
   h3.innerText = 'Posição'

   const ul = document.createElement('ul')

   const posicaoLi = document.createElement('li')
   posicaoLi.innerText = "Posição: "
   const posicaoInput = document.createElement('input')
   posicaoInput.type = 'text'
   posicaoInput.name = 'position'
   ul.appendChild(posicaoLi)
   posicaoLi.appendChild(posicaoInput)
   ul.appendChild(document.createElement('br'))

   const nomeLi = document.createElement('li')
   nomeLi.innerText = "Nome: "
   const nomeInput = document.createElement('input')
   posicaoInput.type = 'text'
   posicaoInput.name = 'name'
   ul.appendChild(nomeLi)
   nomeLi.appendChild(nomeInput)
   ul.appendChild(document.createElement('br'))

   const camisaLi = document.createElement('li')
   camisaLi.innerText = "Camisa: "
   const camisaInput = document.createElement('input')
   posicaoInput.type = 'text'
   posicaoInput.name = 'shirt'
   ul.appendChild(camisaLi)
   camisaLi.appendChild(camisaInput)
   ul.appendChild(document.createElement('br'))

   const botao = document.createElement('span')
   botao.innerHTML = ('<button onclick="confirmar()"> Escalar </button>')
   ul.appendChild(botao)


   playerSection.append(h3, ul)

}

function confirmar() {
   let positionValue = document.getElementsByTagName('li').value
   let nameValue = document.getElementsByName('name').value
   let shirtValue = document.getElementsByName('shirt').value

   console.log (positionValue, nameValue, shirtValue)
}

