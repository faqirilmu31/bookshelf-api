const filter = {
  filterByname: (books, name) => {
    if (name) {
      return books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
    }
    return books;
  },

  filterByReading: (books, reading) => {
    if (reading) {
      return books.filter((book) => book.reading === reading);
    }
    return books;
  },

  filterByFinished: (books, finished) => {
    if (finished) {
      return books.filter((book) => book.finished === finished);
    }
    return books;
  }
}

module.exports = filter;