/*
  String: toUpperCase()
  In addition to the length property, strings have methods. These are functions that are applied to 
  the string. Like the length property, these methods are appended with a point to the string or to 
  a variable that contains a string. The arguments enclosed in parentheses follow. Two of these string 
  methods are the parameterless methods toUpperCase and toLowerCase. They return the string in 
  uppercase or lowercase.
  let town = 'Mthatha';
  let output = town.toUpperCase();
  output has the value 'MTHATHA'. town still has the value 'Mthatha'.
  output = town.toLowerCase();
  Now output has the value 'mthatha'.

  Exercise
  Write a function toCase that takes a string and returns that string in lowercase and uppercase with - 
  as delimiter.

  Example: toCase('Mthatha') should return 'mthatha-MTHATHA'.
*/
function toCase(str){
  let res = str.toLowerCase() + "-" + str.toUpperCase();
  return res;
}
toCase("Himanshu");