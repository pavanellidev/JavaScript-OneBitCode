function calcularMedia(a, b) {
   const media = (a + b) / 2;
   return media
}

const resultado = calcularMedia(12, 6);

console.log(resultado)

function criarProduto(nome, preco) {
   const produto = {
      nome,
      preco,
      estoque: 1
   }
   return produto;
}

const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);

console.log(notebook);

function maioridade (idade) {
   if (idade >= 18) {
      return "Maior de idade"
   } else {
      return "Menor de idade"
   }
}

console.log(maioridade(17))