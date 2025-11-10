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

const {
  favoriteColor: myFavoriteColor,
  name: { middleName: myMiddleName },
} = user; //name aliasing favoriteColor to myFavoriteColor
// console.log(myFavoriteColor, myMiddleName)

//array destructuring =>

const friends = ["Karim", "Rahim", "Mahim"];
// const bestFriend = friends[1];
// console.log(bestFriend);

const [,,myBestFriend]= friends
console.log(myBestFriend);