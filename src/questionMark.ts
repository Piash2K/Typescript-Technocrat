// ?: ternary operator: decision making
// ??: nullish coalescing operator
// ?. optional chaining

const biyerJonnoEligible = (age: number) => {
  //   if (age >= 21) {
  //     console.log("You are eligible");
  //   } else {
  //     console.log("You are not eligible !");
  //   }
  const result = age >= 21 ? "You are eligible" : "You are not eligible !";
  //   console.log(result);
  return result;
};
biyerJonnoEligible(20);

// Nullish coalescing only work on null and undefined
const userTheme = "Green Theme";
const selectedTheme = userTheme ?? "Light Theme";
// console.log(selectedTheme);

const isAuthenticated = "";
const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest!";

const resultWithNullish = isAuthenticated ?? "You are guest!";

// console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};
// const { postalCode } = user;
// console.log(postalCode)
const postalCode = user?.address?.postalCode;
console.log(postalCode);
