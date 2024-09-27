/*
  String: substr()
  The substr method extracts a substring from a string:
  let see = 'see and stop'.substr(0, 3);
  let and = 'see and stop'.substr(4, 3);
  let stop = 'see and stop'.substr(8);
  The first parameter specifies the position at which to start extracting. The second parameter specifies the number of characters 
  to extract. If the second parameter is not set, all the characters from start position to the end of the string are extracted.
  Exercise
  Write a function firstWord, taking a string and returning the first word in that string. The first word are all characters up to the 
  first space.

  Example: firstWord('see and stop') should return 'see'.
*/
function firstWord(str){
  let idx = str.indexOf(" ");
  let ans = str.substr(0 , idx);
  console.log(ans);
}
firstWord(" Himanashu Joshi")
