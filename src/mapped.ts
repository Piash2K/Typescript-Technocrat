// mapped types

// map

const arrayOfNumbers: number[] = [1, 4, 6];

const arrayOfStrings: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap = arrayOfNumbers.map((num) => num.toString());
console.log(arrayOfStringUsingMap);

const user = {
  id: 222,
};

type AreaOfNum = {
  height: number;
  width: number;
};
type height = AreaOfNum["height"];

// type AreaOfString = {
//   height: string;
//   width: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};
/*
T>>>>{ height: string; width: string }
*/

// "height"|"width"

const area1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 40,
};
