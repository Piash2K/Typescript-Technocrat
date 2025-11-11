// dynamically generalize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
// const rollNumber: number[] = [4, 7, 11];
const rollNumber: GenericArray<number> = [4, 7, 11];
// const isEligibleList: boolean[] = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];

const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(2);

type Coordinates = [number, number];

type GenericCoordinates<X, Y> = [X, Y];

const coordinates1: GenericCoordinates<number, number> = [20, 30];
const coordinates2: GenericCoordinates<string, string> = ["20", "30"];
