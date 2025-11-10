// spread operator

const friends: string[] = ["Rahim", "Karim"];

const schoolFriends: string[] = ["Pintu", "Chintu", "Bulbul"];
const collegeFriends: string[] = ["Mr. Smart", "Mr. Very Very Smart"];

// const friends: string[] = ["Rahim", "Karim", ["Pintu", "Chintu", "Bulbul"]]; //Push without using spread operator 

friends.push(...schoolFriends)
friends.push(...collegeFriends)
console.log(friends)