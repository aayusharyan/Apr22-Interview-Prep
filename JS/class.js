//Library management system
//After ES6
//We are currently on Es12 -> ECMA2021 Standard
//Underscores are allowed.
// const num = 1234_1234_1234_1234;
//1234123412341234;
// replaceAll();

class Book {
  //It is a special function which runs when a class is instantiated.
  //This is the FIRST function which runs.
  //All the initialization happens here.
  constructor(title, author) {
    this.name = title;
    this.author = author;
  }

  info() {
    console.log(`This book title ${this.name} is written by ${this.author}`);
  }
}

const book1 = new Book("All this JS", "Aayush");
book1.info();

const book2 = new Book("Something", "Someone");
book2.info();