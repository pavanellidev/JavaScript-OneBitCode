const personagens = [
   { nível: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
   { nível: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
   { nível: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
   { nível: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
   { nível: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
   { nível: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
   { nível: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"},
]

// MAP

// const nomes = []

// for (let i = 0; i < personagens.length; i++) {
//    nomes.push(personagens[i].nome)
// }

const nomes = personagens.map(function (personagem){
   return personagem.nome
})

console.log(nomes)

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//    if (personagens[i].raca === "Orc") {
//       orcs.push(personagens[i].nome)
//    }
// }

const orcs = personagens.filter(function(personagem){
   return personagem.raca === "Orc"
})

console.log(orcs)