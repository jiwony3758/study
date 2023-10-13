

interface Employee {
  calculatePay(): void;
  reportHours(): void;
  save(): void;
}

// calculatePay: 회계팀에서 기능을 정의하며 CFO 보고를 위해 사용
// reportHours: 인사팀에서 기능을 정의하고 사용하며 COO 보고를 위해 사용
// save: DBA가 기능을 정의하고 CTO 보고를 위해 사용

// 이 세 메서드를 Employee라는 단일 클래스에 배치하여 세 액터가 결합됐다.
// 이 결과 CFO 팀에서 결정한 조치가 COO 팀이 의존하는 뭔가에 영향을 줄 수 있다.