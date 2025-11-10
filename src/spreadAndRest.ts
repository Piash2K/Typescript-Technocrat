// spread operator

const friends: string[] = ["Rahim", "Karim"];

const schoolFriends: string[] = ["Pintu", "Chintu", "Bulbul"];
const collegeFriends: string[] = ["Mr. Smart", "Mr. Very Very Smart"];

// const friends: string[] = ["Rahim", "Karim", ["Pintu", "Chintu", "Bulbul"]]; //Push without using spread operator 

friends.push(...schoolFriends)
friends.push(...collegeFriends)
// console.log(friends)


const user = {name: "Piash", phoneNo: "01700000"}

const otherInfo = {
    hobby: "outing",
    favouriteColor: "Black"
}
const userInfo = {...user,...otherInfo}
console.log(userInfo)