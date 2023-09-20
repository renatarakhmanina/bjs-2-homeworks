function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

let student1 = new Student('Петр Петров', 'male', 20);
let student2 = new Student('Анна Лукьянова', 'female', 22);
let student3 = new Student('Николай Павлов', 'male', 19);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks')) {
    for (let mark of marks) {
      this.marks.push(mark);
    }
  }
}

Student.prototype.getAverage = function () {
  if (!this.hasOwnProperty('marks') || this.marks.length === 0) {
    return 0;
  } else {
    return this.marks.reduce((acc, item) => acc + item , 0) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
