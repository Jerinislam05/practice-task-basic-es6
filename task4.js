// write an arrow function where it will do the following:
// it will take an array where the array elements will be the name of your friends
// check if the length of each element is even,push elements with even length to a new array and return the result

const getFriends = (friends) => {
  return friends.filter((friends) => friends.length % 2 === 0);
};

const myFriends = ["rahim", "sadia", "juli", "nadiya", "rohim", "moni"];
const eachFriend = getFriends(myFriends);
console.log(eachFriend); // answer: [ 'juli', 'nadiya', 'moni' ]
