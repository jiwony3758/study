
// 클래스는 타입(런타임 접근 불가)과 값(런타임 접근 가능)을 둘 다 사용한다.


class SquareClass {
    constructor(public width: number) {}
}

class RectangleClass extends SquareClass {
    constructor(
        public width: number,
        public height: number,
    ){
        super(width);
    }
}

type ShapeClass = SquareClass | RectangleClass;
// SquareClass | RectangleClass 타입으로 참조

function calculateArea(shape: ShapeClass) {
    if(shape instanceof RectangleClass) {
        // shape instanceof RectangleClass 값으로 참조
        shape; // 타입이 Rectangle
        return shape.width * shape.height;
    }else {
        return shape.width * shape.width;
    }
}
