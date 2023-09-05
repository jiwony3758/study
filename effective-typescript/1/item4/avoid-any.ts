// any타입 지양하기

/*
* 1. 타입 안정성이 없다.
*/

let age: number;
age = '12' as any;

age += 1 // 런타임에서는 정상이나 age는 "121"

/*
* 2. any는 함수 시그니처를 무시한다.
*/

function calculateAge(birthDate: Date): number {
    const nowYear = new Date().getFullYear();
    const birthYear = birthDate.getFullYear();
    
    return nowYear - birthYear + 1;
}

let birthDate: any = '1990-01-19';
calculateAge(birthDate); // Date 타입의 파라미터를 받아야하는데 any를 하면 어떤 타입이든 입출력 가능

/*
* 3. any 타입에는 언어 서비스가 적용되지 않는다.
*/

let person: any = { first: 'George', last: 'Washington' };
person. // person의 자동완성 기능과 적절한 도움말 제공을 받지 못 한다.

/*
* 4. any 타입은 코드 리팩터링 때 버그를 감춘다.
*/

interface ComponentProps {
    // onSelectItem: (item: any) => void;
    onSelectItem: (id: number) => void;
}

function renderSelector(props: ComponentProps) { /* ... */ };

let selectedId: number = 0;
function handleSelectItem(item: any) { // 여기가 any이므로 30번줄을 31번줄로 변경하였음에도 타입체커가 오류를 찾지 못 함.
    selectedId = item.id;
}

renderSelector({onSelectItem: handleSelectItem});

/*
* 5. any는 타입 설계를 감춘다.
*/

/*
* 6. any는 타입시스템의 신뢰도를 떨어트린다.
*/