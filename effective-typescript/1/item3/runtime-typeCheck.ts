

interface Square {
    width: number;
}

interface Rectangle extends Square {
    height: number;
}

type Shape = Square | Rectangle;

function calculateArea(shape: Shape) {
    if(shape instanceof Rectangle) {
        // instanceof 체크는런타임에 일어나지만 Rectangle은 타입이기 때문에 런타임 시점에 아무런 역할을 할 수 없음.
        return shape.width * shape.height;
    }else {
        return shape.width * shape.width;
    }
}


function calculateArea2(shape: Shape) {
    if('height' in shape) {
        // height 속성을 통해 런타임에 타입 정보를 유지하게 만듦.
        shape;
        return shape.width * shape.height;
    }else {
        shape;
        return shape.width * shape.width;
    }
}

