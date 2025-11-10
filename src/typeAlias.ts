type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "X",
  },
  gender: "male",
  contactNo: "0170000",
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};

const user2: User = {
  id: 123,
  name: {
    firstName: "Mr",
    lastName: "Y",
  },
  gender: "female",
  contactNo: "0190000",
  address: {
    division: "Chittagong",
    city: "Chittagong",
  },
};

type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "Mr. X";

//function

type AddFunc = (num1: number, num2: number)=> number

const add: AddFunc = (num1, num2) => num1 + num2;
