// Parentheses

// Just as in mathematics, the order of operations rules are valid in JavaScript. Multiplication and division are performed before addition and subtraction. With parentheses you can specify the order of operations.

// let x1 = 3 + 4 * 2;
// let x2 = (3 + 4) * 2;
// x1 is 11 and x2 is 14.


// Exercise
// Write a function mean that takes 2 numbers and returns their mean value.

// Example: mean(1, 2) should return 1.5.

function mean(num1,num2){
  return (num1+num2)/2;
}
const ans = mean(1,2);
console.log(ans);
