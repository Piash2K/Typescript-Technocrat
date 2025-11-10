// object destructuring
// array destructuring

const user = {
  id: 123,
  name: {
    firstName: "Md",
    middleName: "Piash",
    lastName: "Islam",
  },
  gender: "male",
  favoriteColor: "black",
};

const {favoriteColor: myFavoriteColor, name: {middleName: myMiddleName}} = user;  //name aliasing favoriteColor to myFavoriteColor
console.log(myFavoriteColor, myMiddleName)