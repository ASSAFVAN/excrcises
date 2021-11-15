var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// const readableBooks = library.filter((book) => book.readingStatus === true);
// console.log(readableBooks);

function readableBooks(arr) {
  return arr.filter(function (book) {
    if (book.readingStatus === true) {
      return book;
    }
  });
}
console.log(readableBooks(library));
