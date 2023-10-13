// Employee 객체의 문제를 해결하는 방법은 다양하다.

// 1. 세 개의 메소드를 클래스를 따로 만들어 각각 employeeData를 공유하는 것이다. 각 클래스에서는 서로의 존재를 몰라야 한다.
class PayCalculator {
  employeeData: EmployeeData
  calculatePay(): void {};
}

class HourReporter {
  employeeData: EmployeeData
  reportHours(): void {};
}

class EmployeeSaver {
  employeeData: EmployeeData
  saveEmployee(): void {};
}

class EmployeeData {}

// 하지만 이렇게 할 경우 개발자가 세 가지 클래스를 인스턴스화하고 추적해야 한다는 단점이 있다.

// 2. 이러한 난관에서 빠져나올 때 흔히 쓰는 기법으로 퍼사드(Facade)패턴이 있다.
class EmployeeFacade{
  payCalculator: PayCalculator;
  hourReporter: HourReporter;
  employeeSaver: EmployeeSaver;

  calculatePay(): void {
    return this.payCalculator.calculatePay();
  }
  reportHours(): void {
    return this.hourReporter.reportHours();
  }
  saveEmployee(): void {
    return this.employeeSaver.saveEmployee();
  }
}

