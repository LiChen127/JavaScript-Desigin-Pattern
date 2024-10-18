// 享元模式
// 当我们创建大量类似对象时，享元模式是节省内存的一个有效方法。

//在我们的应用中，我们希望用户能够添加书籍。所有书籍都有一个title、一个author和一个isbn编号！但是，图书馆通常不会只有一本书：它通常会有同一本书的多份副本。

// 如果同一本书有多份副本，那么每次都创建新的书籍实例就没什么用了。相反，我们希望创建Book构造函数的多个实例，它们代表一本书。

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
const books = new Map();
const createBook = (title, author, isbn) => {
  const exitingBook = books.has(isbn);
  if (exitingBook) {
    return books.get(isbn);
  }
  const book = new Book(title, author, isbn);
  books.set(isbn, book);
  return book;
}

// 为了跟踪总副本数量，让我们创建一个bookList包含图书馆中书籍总数的数组。
const bookList = [];
const addBook = (title, author, isbn, availability, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availability,
    isbn,
  };
  bookList.push(book);
  return book;
}
// 当您创建大量对象时，享元模式非常有用，因为这可能会耗尽所有可用 RAM。它使我们能够最大限度地减少内存消耗。

// 在 JavaScript 中，我们可以通过原型继承轻松解决这个问题。如今，硬件拥有 GB 的 RAM，这使得享元模式不再那么重要。

