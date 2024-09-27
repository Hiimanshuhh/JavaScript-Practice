/*
  String: trim()
  The trim method removes whitespaces from both ends of a string.
  let input = ' Rosa Parks ';
  let name = input.trim();
  name contains the string 'Rosa Parks'. Notice that input still contains the string ' Rosa Parks '.
  Exercise
  Write a function firstChar, which returns the first character that is not a space when a string is passed.

  Example: firstChar(' Rosa Parks ') should return 'R'.
*/
function firstChar(str){
  return str.trim().charAt(0);
}