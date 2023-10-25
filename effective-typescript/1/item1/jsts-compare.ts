function greet(who: string) {
                  // 타입스크립트에서는 유효하나 자바스크립트에서는 'SyntaxError: Unexpected token :' 에러를 만난다
  console.log("Hello", who);
}

let city = 'new york city';
console.log(city.toUppercase());
                // TypeError: city.toUppercase is not a function 에러 발생
                // 타입스크립트의 타입 체커는 문제접을 찾아내 
                // 'toUppercase' 속성이 'string' 형식에 없습니다.
                // 'toUpperCase'를 사용하시겠습니까? 라는 메시지를 보여준다.

