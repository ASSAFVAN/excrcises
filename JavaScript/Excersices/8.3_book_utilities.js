const book1 = {
  name: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
  year: 1998,
};
const book2 = {
  name: "Moby Dick",
  author: "Herman Melville",
  year: 1851,
};

const bookUtils = {
  getFirstPublished(booka, bookb) {
    let smaller = Math.min(booka.year, bookb.year);
    if (booka.year < bookb.year) {
      return booka.name;
    } else {
      return bookb.name;
    }
  },
  setNewEdition(book, editionYear) {
    book.latestEdition = editionYear;
  },
  setLanguage(book, bookLanguage) {
    book.language = bookLanguage;
  },
  setTranslation(book, translationLanguage, bookTranslator) {
    book.translation = {
      translator: bookTranslator,
      language: translationLanguage,
    };
  },
  setPublisher(book, publisherName, publisherLocation) {
    book.publisher = {
      name: publisherName,
      location: publisherLocation,
    };
  },
  isSamePublisher(booka, bookb) {
    if (
      booka.publisher.name === bookb.publisher.name &&
      booka.publisher.location === bookb.publisher.location
    ) {
      console.log("The books have the same publisher and location");
    } else {
      console.log("The books do not have the same publisher and location");
    }
  },
};
console.log(bookUtils.getFirstPublished(book1, book2));
bookUtils.setNewEdition(book1, "2000");
bookUtils.setLanguage(book1, "English");
bookUtils.setTranslation(book1, "Hebrew", "Assaf Vanunu");
bookUtils.setPublisher(book1, "Mike", "UK");
bookUtils.setPublisher(book2, "Mike", "UK");
bookUtils.isSamePublisher(book1, book2);
console.log(book1);
console.log(book2);
