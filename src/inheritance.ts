class Person{
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numberOfHours: number) {
    console.log(`${this.name} Eni ${numberOfHours} ghonta ghumai`);
  }
}

class Student extends Person {
  rollNo: number;
  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }
}

const student1 = new Student(`Mr. Fakibaaz`, 18, "Bangladesh",222);

student1.getSleep(15);

class Teacher extends Person {
  designation: string; //extra property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }
  takeClass(numberOfHours: number) {
    console.log(`${this.name} eni ${numberOfHours} ghonta class nei`);
  }
}

const teacher1 = new Teacher(
  `Mr. Smart Teacher`,
  25,
  "Bangladesh",
  "Senior Teacher"
);

teacher1.getSleep(5);
