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
    return this.a + this.b + this.c;
  }

  get area() {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    return +Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    const triangle = new Triangle(0, 0, 0);
    Object.defineProperty(triangle, 'perimeter', {
      get: function () {
        return 'Ошибка! Треугольник не существует';
      }
    });
    Object.defineProperty(triangle, 'area', {
      get: function () {
        return 'Ошибка! Треугольник не существует';
      }
    });
    return triangle;
  }
}
