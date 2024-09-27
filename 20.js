/*
String: length

Strings have the length property. This property represents the number of characters in a string. 
To do this, you must append .length to the string or to the variable that contains the string:
let charNumber = 'Ai'.length;
'Ai' has 2 characters. So charNumber has the value 2.
let name = 'Weiwei';
charNumber = name.length;
'Weiwei' has 6 characters. charNumber now has the value 6.
charNumber = ''.length;
The empty string has no characters. The value of charNumber is 0.

Exercise
Write a function length that takes a string and returns the number of characters of the string.

Example: length('sun') should return 3.
*/
function length(str){
  return str.length;
}
