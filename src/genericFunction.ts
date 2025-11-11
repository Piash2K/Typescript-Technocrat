// Generic Function: Generalize function

const createArrayWithString = (value: string) => [value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithBoolean = (value: boolean) => [value];

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const createArrayWIthUserObj = (value: { id: number; name: string }) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
  id: 123,
  name: "Next Level",
});

// Tuple
const createArrayWithTuple = (
  param1: {
    id: string;
    name: string;
  },
  param2: string
) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Piash", false);
const res2 = createArrayTupleWithGeneric(222, {
  name: "Piash",
});

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Piash",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);
console.log(result)