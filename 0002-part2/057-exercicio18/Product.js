class Product {
  constructor(name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity) {
    this.inStock += quantity
  }
  calculateDiscount(percentage) {
    this.price * ((100 - percentage) / 100)
  }
}

let newProduct = new Product ("Carro", {fiat: "Palio"}, 18000);


newProduct.addToStock(5)

const priceWithDiscount = newProduct.calculateDiscount(10)

console.log(newProduct)
console.log(priceWithDiscount)

