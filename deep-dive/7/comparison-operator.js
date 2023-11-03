// 동등 비교
5 == 5

// 타입은 다르지만 암묵적 타입 변환을 통해 타입을 일치시키면 동등하다.
5 == '5';

// 동등 비교. 결과를 예측하기 어렵다.
'0' == ''         // false
0 == ''           // true
0 == '0'          // true
false == 'false'  // false
false == '0'      // true
false == null     // false
false == undefined // false



// 일치 비교
5 === 5

// 암묵적 타입 변환을 하지 않고 값을 비교한다.
// 즉, 값과 타입이 모두 같은 경우만 true를 반환한다.
5 === '5' // false

Number.isNaN(NaN) // true
Number.isNaN(10)  // false
Number.isNaN(1 + undefined) // true

// 양의 0과 음의 0은 모두 true다.
0 === -0  // true
0 == -0   // true

-0 === +0         // true
Object.is(-0, +0) // false

NaN === NaN           // false
Objject.is(NaN, NaN)  // true