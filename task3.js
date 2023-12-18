// write an arrow function that will take 2 parameters. The first parameter will come from you and the second parameter will be a default parameter. add this two parameters and return the result.

const getDefault = (x, y = 2) => x + y;
const myValue = 5;
const result = getDefault(myValue);
console.log(result); // answer: 7
