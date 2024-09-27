/*
  String: charAt()
  To get a character from a string at a specified index, use the charAt(index) method:
  let char0 = 'Frantz'.charAt(0);
  let char1 = 'Frantz'.charAt(1);
  let char9 = 'Frantz'.charAt(9);
  The first character has the index 0. So char0 has the value 'F' and char1 has the value 'r'. If the index is larger than the index of the last 
  character, the empty string is returned. So char9 has the value ''.
  Exercise
  Write a function shortcut that takes two strings and returns the initial letters of theses strings.

  Example: shortcut('Amnesty', 'International') should return 'AI'.
*/
function shortcut(str,str1){
  return str.charAt(0) + str1.charAt(0);
}
