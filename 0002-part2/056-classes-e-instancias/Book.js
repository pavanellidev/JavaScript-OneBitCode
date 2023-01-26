class Book {
  constructor(title, pages) {
    this.title = title
    this.pages = pages
    this.published = false
  }

  publish() {
    this.published = true
  }
}

const sociedadeDoAnel = new Book ('Sociedade do Anel', 576)

console.log(sociedadeDoAnel)

sociedadeDoAnel.publish()

console.log(sociedadeDoAnel) 