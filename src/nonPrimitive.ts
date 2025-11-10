// array, object

let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(); //only push string

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2];

mixedArr.push(); //only push (string | number)

let coordinates: [number, number, number] = [20, 30, 40];

let couple: [string, string] = ["Husband", "Wife"];

let piashNameAndRoll: [string, number] = ["Piash", 109];
piashNameAndRoll[0] = ""; //only string for 0 index , and only number for index 1

let destination: [string, string, number] = ["Dhaka", "Chattogram", 3];

//reference type: object

// const user: {
//   firstName: string;
//   middleName: string;
//   lastName: string;
// } = {
//   firstName: "Md",
//   middleName: "Piash",
//   lastName: "Islam",
// };
// const user: {
//   organization: "Programming Hero"; //value => type, and this type call literal types
//   firstName: string;
//   middleName?: string; //optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//   organization: "Programming Hero",
//   firstName: "Jhankar",
//   lastName: "Mahbub",
//   isMarried: true,
// };

// // user.organization = "Programming Hero Fire" //fixed, so never it will be changed
// console.log(user);
const user: {
  readonly organization: string; //readonly => access modifiers
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "Jhankar",
  lastName: "Mahbub",
  isMarried: true,
};

// user.organization = "Programming Hero Fire" //readonly, so never it will be changed
console.log(user);
