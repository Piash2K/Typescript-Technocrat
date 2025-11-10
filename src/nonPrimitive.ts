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
