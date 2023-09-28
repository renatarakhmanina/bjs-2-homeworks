//Задача №1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

//Задача №2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    return this.books.splice(this.books.findIndex(book => book.name === bookName), 1)[0] || null;
  }
}

//Задача №3
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subjectName) {
    if (typeof mark !== 'number' || typeof subjectName !== 'string' || mark > 5 || mark < 2) {
      return;
    }
    if (!this.marks[subjectName]) {
      this.marks[subjectName] = [];
    }
    this.marks[subjectName].push(mark);
  }

  getAverageBySubject(subjectName) {
    return this.marks[subjectName] && this.marks[subjectName].length > 0 ? this.marks[subjectName].reduce((acc, item) => acc + item, 0) / this.marks[subjectName].length : 0;
  }

  getAverage() {
    return Object.keys(this.marks).length > 0 ? Object.keys(this.marks).reduce((acc, item) => acc + this.getAverageBySubject(item), 0) / Object.keys(this.marks).length : 0;
  }
}

//Тесты к задачам №1, №2
function testCasePrintEdition() {
  const sherlock = new PrintEditionItem(
    'Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе',
    2019,
    1008
  );

  sherlock.state = 10;
  console.log(sherlock.state);
  sherlock.fix();
  console.log(sherlock.state);
}

function testCaseLibrary() {
  const library = new Library('Тихое место');

  library.addBook(
    new NovelBook(
      'Ирвин Уэлш',
      'Кошмары Аиста Марабу',
      1995,
      294
    )
  );
  library.addBook(
    new NovelBook(
      'Джеймс Скадамор',
      'Клиника Амнезия',
      2007,
      309
    )
  );

  let oldBook = new FantasticBook('Малоизвестный Автор', 'Довольно старая книга', 1919, 14);
  library.addBook(oldBook);
  console.log(library);
  console.log(library.findBookBy('releaseDate', 1995));
  console.log(library.findBookBy('releaseDate', 1919));
  console.log(library.giveBookByName('Довольно старая книга'));
  console.log(oldBook.state = 34);
  oldBook.fix();
  console.log(oldBook.state);
  library.addBook(oldBook);
  console.log(library);
}

//Тесты к задаче №3
function testCaseStudent() {
  let someStudent = new Student('Lola');
  someStudent.addMark(3, 'literature');
  someStudent.addMark(5, 'literature');
  someStudent.addMark(99, 'literature');
  someStudent.addMark(4, 'maths');
  console.log(someStudent.getAverageBySubject('literature'));
  console.log(someStudent.getAverageBySubject('biology'));
  console.log(someStudent.getAverage());
}