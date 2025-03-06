// parseInt()

// Sometimes you want to read a number from a string. In case of an integer (..., -2, -1, 0, 1, 2, ..) you can use the parseInt function. The following examples return 19 or -19:
// let n1 = parseInt('19', 10);
// let n2 = parseInt('+19', 10);
// let n3 = parseInt('-19', 10);
// let n4 = parseInt('19 Grad', 10);
// let n5 = parseInt('19.1', 10);
// let n6 = parseInt('019', 10);
// let n7 = parseInt(' 19', 10);
// Besides the direct reading of integers with or without sign (n1, n2, n3), parseInt can also handle some more complex cases. Non-numeric characters after (n4, n5) as well as zeros (n6) and spaces (n7) before the integer will be ignored.

// In all examples, the second parameter passed to parseInt is 10. This parameter specifies the radix (the base in mathematical numeral systems) on which the number is to be interpreted. 10 represents the usual decimal system. If you omit the second parameter, the decimal system is normally used as default. Since there are exceptions to this rule, you should always specify the radix!

// If parseInt cannot read an integer, it returns NaN (Not a Number).
// let n1 = parseInt('text', 10);
// let n2 = parseInt('23 No. 10', 10);
// In the first case there is no number at all. In the second case, there are non-numeric characters before the number. This is not allowed and results in NaN.

// A detailed documentation of parseInt can be found at Mozilla web docs.
// Exercise
// Write a function add that takes a string with a summation task and returns its result as a number. Two natural numbers should be added. The summation task is a string of the form '102+17'.

// Example: add('102+17') should return 119.