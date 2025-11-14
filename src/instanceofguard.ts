// oop: instance of type guard / type narrowing

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getSleep(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours} ghonta ghumai `);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours} ghonta study kore `);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }
  takeClass(numberOfHours: number) {
    console.log(`${this.name} doinik ${numberOfHours} ghonta class nei `);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; //user is student
};
const isTeacher = (user: Person) => {
  return user instanceof Teacher; //user is teacher
};
const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(10);
  } else if (isTeacher(user)) {
    user.takeClass(5);
  } else {
    user.getSleep(15);
  }
};

const student1 = new Student("Mr. Student");

const teacher1 = new Teacher("Mr. Teacher");
const peroson1 = new Person("Mr. Person");
getUserInfo(peroson1);
