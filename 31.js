/*
Modulo
Another arithmetic operator is modulo. It calculates the remainder of a division and is represented by %.
let x = 7 % 2;
let y = 20 % 3;
7 divided by 2 is 3 with remainder 1. x is 1. 20 divided by 3 is 6 with remainder 2. y is 2.

Exercise
Write a function onesDigit that takes a natural number and returns the ones digit of that number.

Example: onesDigit(2674) should return 4.
*/
function onesDigit(n) {
  return n % 10;
}