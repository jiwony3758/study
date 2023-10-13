// * 아래 코드의 문제점 *
// 1. drawAllShapes 함수는 새로운 종류의 도형에 닫혀있다. 도형이 추가될 때마다 switch문을 계속 수정해야한다.
// 2. ShapeType에 새로운 변수를 선언해야한다.


enum ShapeType {
  circle = "circle",
  Square = "squre"
}
class Shape {
  itsType: ShapeType
}

export type Point = { x: number, y: number };

class Circle {
  itsType: ShapeType;
  itsRadius: number;
  itsCenter: Point
}

class Square {
  itsType: ShapeType;
  itsSide: number;
  itsTopLeft: Point;
}

function drawCircle(circle: Circle): void { console.log(circle) };
function drawSquare(square: Square): void { console.log(square)};

function drawAllShapes(list: Shape[], n: number): void{

  for (let i = 0; i < n; i++) {
    const shape: Shape = list[i];

    switch(shape.itsType) {
      case ShapeType.circle:
        drawCircle(shape as Circle);
        break;
      case ShapeType.Square:
        drawSquare(shape as Square);
        break;
    }
  }
}

const square = new Square();
square.itsType = ShapeType.Square;
square.itsSide = 3;
square.itsTopLeft = { x: 3, y: 7 };

drawAllShapes([square], 1);