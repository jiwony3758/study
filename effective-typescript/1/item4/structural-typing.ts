/*
*   구조적 타이핑
*/

interface Vector2D {
    x: number;
    y: number;
}

function calculateLength(v: Vector2D) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

interface NamedVector {
    name: string;
    x: number;
    y: number;
}

const v: NamedVector = { x: 3, y: 4, name: 'Zee' };
calculateLength(v);

// NamedVector가 Vector2D와 호환되기 때문에 calculateLength 호출이 가능함.

interface Vector3D {
    x: number;
    y: number;
    z: number;
}

function normalize(v: Vector3D) {
    const length = calculateLength(v);
    return {
        x: v.x / length,
        y: v.y / length,
        z: v.z / length,
    }
}

normalize({ x: 3, y: 4, z: 5 });
// normalize에서 calculateLength를 Vector3D를 파라미터로 호출해도 문제가 생기지 않는 문제 발생
// 타입스크립트 타입은 열려있다고 표현


function wrongCalculateLengthL1(v: Vector3D) {
    for (const axis of Object.keys(v)) {
        const coord = v[axis];
        length += Math.abs(coord);
    }
    return length;
}

// 타입스크립트의 타입이 열려있는 이유 때문에 Vector3D가 갖고있는 x,y,z타입을 제외한 타입이 들어갈 수 있어 에러 발생.
// 이러한 이유로 타입스크립트에서는 루프문 보다 아래처럼 구현하는게 좋다.

function calculateLengthL1(v: Vector3D) {
    return Math.abs(v.x) + Math.abs(v.y) + Math.abs(v.z);
}

// 클래스에서의 당황스러운 결과

class C {
    foo: string;
    constructor(foo: string) {
        this.foo = foo;
    }
}

const c = new C('instance of C');
const d: C = { foo: 'object literal' };

// 자바스크립트 특성상 모든 객체가 Object.prototype 기반으로서 생성자를 가지므로 문제가 생기지 않는다.

//구조적 타이핑을 사용하면 유닛 테스팅을 손쉽게 할 수 있다.