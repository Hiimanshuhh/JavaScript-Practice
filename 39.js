// Boolean

// Another important data type next to String and Number is Boolean. It has only two possible values: true and false. You can calculate with Boolean values similar to numbers. JavaScript has three Boolean operators: && (and), || (or) and ! (not). && links two Boolean values. If both values are true, the result is true. In all other cases it is false. With || the result is true, if at least one of the two input values is true. If both input values are false, the result is false. ! is applied to a single Boolean value and inverts this value: !true is false and !false is true.

// let x1 = true && false;
// let x2 = !x1;
// let x3 = x1 || x2;
// x1 is false, x2 is true and x3 is true.

// Exercise
// Write a function nand that takes two Boolean values. If both values are true, the result should be false. In the other cases the return should be true.

// I.e.: The call nand(true, true) should return false. The calls nand(true, false), nand(false, true) and nand(false, false) should return true.

function nand(str,strg){
  let and = str&&strg;
  return !and;
}
let ans = nand(true,false);
console.log(ans);