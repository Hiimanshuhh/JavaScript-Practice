// min and max

// The minimum and maximum of a set of numbers can be calculated with Math.min() and Math.max():
// let min = Math.min(5, 7);
// let max = Math.max(3, 9, 2);
// min receives the value 5 and max the value 9. The special: Both functions can be called with an arbitrary number of arguments.

// Exercise
// Write a function midrange, that calculates the midrange of 3 numbers. The midrange is the mean of the smallest and largest number.

// Example: midrange(3, 9, 1) should return (9+1)/2 = 5.

function midrange(num1 , num2, num3){
  let calculated = (Math.max(num1,num2,num3)+Math.min(num1,num2,num3))/2;
  return calculated;
}
let ans = midrange(1,2,3);
console.log(ans);