function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function () {
  return this.marks && this.marks.length > 0 ? this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length : 0;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

function testCase() {
  let student1 = new Student('Петр Петров', 'male', 20);
  let student2 = new Student('Анна Лукьянова', 'female', 22);
  let student3 = new Student('Николай Павлов', 'male', 19);
}