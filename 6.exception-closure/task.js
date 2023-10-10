// Задача №1
function parseCount(valueToParsing) {
  const result = Number.parseFloat(valueToParsing);
  if (isNaN(result)) {
    throw new Error('Невалидное значение');
  }
  return result;
}

function validateCount(valueToParsing) {
  try {
    return parseCount(valueToParsing);
  } catch (error) {
    return error;
  }
}

// Задача №2
class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
  }

  get perimeter() {
    let perimeter = this.a + this.b + this.c;
    return perimeter;
  }

  get area() {
    return +Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - this.a) * (this.perimeter / 2 - this.b) * (this.perimeter / 2 - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return 'Ошибка! Треугольник не существует';
      },
      get perimeter() {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}
