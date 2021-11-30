const book = {
  bookName: "The Client",
  author: "John Grisham",
  publishYear: 1993,
  rating: 4.03,
};

function myBook(book) {
  return `The book ${book.bookName} was written by ${book.author} in the year ${book.publishYear} and have a rating of ${book.rating}`;
}
console.log(myBook(book));
