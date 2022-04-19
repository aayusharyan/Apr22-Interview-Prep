//Library management system

//Before ES6

//Factory function.
function createBook(title, author) {
  const ob = {
    'name': title,
    'author': author,
    'info': function() {
      console.log(`This book titled ${title} is written by ${author}`);
    }
  }

  return ob;
}

const book1 = createBook("All things JS", "Aayush");
book1.info();

const book2 = createBook("JS2", "Someone");
book2.info();
