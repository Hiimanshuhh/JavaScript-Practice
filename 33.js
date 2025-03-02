// Math

// Many mathematical functions are grouped together in the Math object. For example, Math.sqrt(x) returns the square root and Math.pow(x, y) calculates x to the power of y.

// let y1 = Math.sqrt(9);
// let y2 = Math.pow(10, 3);
// y1 has the value 3 and y2 has the value 1000 (10³ = 10 * 10 * 10 = 1000).

// Exercise
// Write a function hypotenuse that calculates the length of the hypotenuse of a right triangle. The length of the two legs is passed to the function. Tip: In a right triangle the Pythagorean theorem is valid. If a and b are the lengths of the two legs and c is the length of the hypotenuse, the following is true: a² + b² = c². Since 3² + 4² = 5² applies, hypotenuse(3, 4) should return 5.
function hypotenuse(a,b){
  let ans = Math.floor(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)));
  return ans;
}
let sol = hypotenuse(3,3);
console.log(sol);