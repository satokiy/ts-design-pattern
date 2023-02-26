export {};

abstract class Entry {
  constructor(private code: string, private name: string) {}
  getCode(): string {
    return this.code;
  }

  getName(): string {
    return this.name;
  }

  abstract getChildren(): Entry[];
  abstract accept(visitor: Visitor);
}

class Group extends Entry {
  private entries: Entry[] = [];
  add(entry: Entry) {
    this.entries.push(entry);
  }

  getChildren(): Entry[] {
    return this.entries;
  }
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

class Employee extends Entry {
  getChildren(): Entry[] {
    return [];
  }
  accept(visitor: Visitor) {
    visitor.visit(this);
  }
}

interface Visitor {
  visit(entry: Entry);
}

class ListVisitor implements Visitor {
  visit(entry: Entry) {
    entry instanceof Group
      ? console.log(`${entry.getCode()}: ${entry.getName()}`)
      : console.log(`    ${entry.getCode()}: ${entry.getName()}`);

    entry.getChildren().forEach((child) => child.accept(this));
  }
}

class CountVisitor implements Visitor {
  private groupCount = 0;
  private employeeCount = 0;
  visit(entry: Entry) {
    entry instanceof Group ? this.groupCount++ : this.employeeCount++;
    entry.getChildren().forEach((child) => child.accept(this));
  }

  getGroupCount(): number {
    return this.groupCount;
  }

  getEmployeeCount(): number {
    return this.employeeCount;
  }
}

function run() {
  const root = new Group("01", "本社");
  root.add(new Employee("0101", "車両"));
  root.add(new Employee("0102", "副社長"));

  const g1 = new Group("10", "神奈川支部");
  g1.add(new Employee("1001", "支部長"));

  const g2 = new Group("11", "横浜営業所");
  g2.add(new Employee("1101", "yamada"));
  g2.add(new Employee("1102", "sato"));
  g2.add(new Employee("1103", "ito"));
  g2.add(new Employee("1104", "kato"));

  g1.add(g2);
  root.add(g1);

  const list = new ListVisitor();
  const count = new CountVisitor();

  root.accept(list);
  root.accept(count);
  console.log(`group count: ${count.getGroupCount()}`);
  console.log(`employee count: ${count.getEmployeeCount()}`);
}

run();
