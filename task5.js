// write an arrow function where it will do following:
// square each array element
// calculate the sum of the squared elements
// return the average of the sum of the squared elements

const addSquareNumber = (numbers) => {
  let sumOfSquare = 0;
  for (const number of numbers) {
    const squaredValue = number ** 2;
    sumOfSquare += squaredValue; //bujhini
  }
  const average = sumOfSquare / numbers.length;
  const roundAverage = average.toFixed(2);
  return roundAverage;
};
const myNumbers = [3, 2, 4, 2, 5, 3];
const result = addSquareNumber(myNumbers);
console.log(result); // answer: 11.166666666666666, 11.17(after twoDecimals)
