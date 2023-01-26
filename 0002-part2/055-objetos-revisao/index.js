function Book(title, pages, tags, author) {
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity
  }
}

const sociedadeDoAnel = new Book ('A Sociedade do Anel', 576, ['fantasy', 'medieval'], {name: 'Tolkien'}, true )

console.log(sociedadeDoAnel)

sociedadeDoAnel.addOnStock(25)

console.log(sociedadeDoAnel)