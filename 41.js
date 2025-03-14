// XOR
// The Boolean operators have an order: First NOT, then AND, last OR. If you want to change this order, use parentheses:
// let x1 = true || false && false;
// let x2 = (true || false) && false;
// let x3 = !false && false;
// let x4 = !(false && false);
// In the 1st line && is evaluated first. x1 is true. In the 2nd line || is evaluated first. x2 is false. In the 3rd line ! is evaluated first. x3 is false. In the 4th line && is evaluated first. x4 is true.

// In the following task you should code another important gate, the XOR (eXclusive OR) gate.
// Exercise
// Write a function xor that takes two Boolean values. If both values are different, the result should be true. If both values are the same, the result should be false.

// I.e.: The calls xor(true, false) and xor(false, true) should return true. The calls xor(true, true) and xor(false, false) should return false.

function xor(a, b) {
  return a && !b || !a && b;
}