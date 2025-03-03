// Rounding

// If you want to round a number, you can use the Math.round(), Math.floor() and Math.ceil() functions.
// let a = Math.round(5.49);
// let b = Math.round(4.5);
// let c = Math.floor(5.99);
// let d = Math.ceil(4.01);
// Math.round() rounds a number to the nearest integer, Math.floor() rounds a number downwards to the nearest integer and Math.ceil() rounds a number upwards to the nearest integer. Therefore, the variables a to d all get the value 5.

// Exercise
// Write a function round100 that rounds a number to the nearest hundred.

// Example: round100(1749) should return 1700 and round100(856.12) should return 900.

function round100(num){
  let ans = (Math.round(num/100))*100;
  return ans; 
}
let sol = round100(1199);
console.log(sol); 