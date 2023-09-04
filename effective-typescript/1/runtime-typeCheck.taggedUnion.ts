interface SquareWithKind {
    kind: "sqare";
    width: number;
}

interface RectangleWithKind {
    kind: "rectangle";
    height: number;
    width: number;
}

type ShapeWithKind = SquareWithKind | RectangleWithKind;

function calculateAreaWithKind(shape: ShapeWithKind) {
    if(shape.kind === "rectangle") {
        // 런타임에 손쉽게 타입 정보를 유지할 수 있게 "tagged union" 기법 활용
        shape;
        return shape.width * shape.height;
    }else {
        shape;
        return shape.width * shape.width;
    }
}