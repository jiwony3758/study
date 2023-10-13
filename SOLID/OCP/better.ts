// 새로운 도형이 추가되더라도 기존 코드를 수정하지 않아도 된다.
// 경이롭다...

import { Point } from "./wrong";


class Shape {
  public draw(): void {};
}

class Square extends Shape {
  itsSide: number;
  itsTopLeft: Point;
  public draw(): void { console.log("draw square")};
}

class Circle extends Shape {
  itsRadius: number;
  itsCenter: Point
  public draw(): void { console.log("draw circle") };
}

function drawAllShapes(list: Shape[]) {
  for(const shape of list) {
    shape.draw();
  }
}

drawAllShapes([
  new Circle(), 
  new Square(), 
  new Square(), 
  new Circle()
]);