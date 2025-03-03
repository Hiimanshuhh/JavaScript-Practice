// Math.PI
// Besides functions Math offers some mathematical constants. Math.PI gives π (roughly 3.14) and Math.E gives Euler's number e (roughly 2.71).
// Exercise
// Write a function area that calculates the area of a circle. The function is given the radius of the circle.

// Example: area(1) should return π and area(2) should return 4 * π.

function area(r){
  let ans = Math.PI*(Math.pow(r,2));
  return ans ;
}