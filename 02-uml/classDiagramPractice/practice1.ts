// class image

class Employee {
  private id: number;
  private name: string;
  private salary: number;

  work() {
    console.log("εγγΎγ");
  }

  protected getSalary(): number {
    return this.salary;
  }
  
  protected setSalary(salary: number) {
    return (this.salary = salary);
  }
}
