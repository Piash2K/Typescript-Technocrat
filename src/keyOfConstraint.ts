// keyof : type operator

type RichPeoplesVehicle = {
  car: string; //key : value (pair)
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

// const MyVehicle:MyVehicle2 = "ship"
const MyVehicle: MyVehicle2 = "cng";

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user = {
  id: 222, //key:value pair
  name: "Piash",
  address: {
    city: "Dhaka",
  },
} as const;

// const myId = user.id
// const myId = user["id"];
// const myName = user["name"];
// const myAddress = user["address"];

// console.log({ myId, myName, myAddress });

// const getPropertyFromObj = (obj: User, key: "id" | "name" | "address") => {
//   return obj[key];
// };
const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

const result1 = getPropertyFromObj(user, "name");
console.log(result1);

const product = {
  brand: "HP",
};
const result2 = getPropertyFromObj(product, "brand");
console.log(result2);

const student = {
  id: "109",
  name: "Robin",
  class: "University",
};
const result3 = getPropertyFromObj(student, "name");
console.log(result3);
