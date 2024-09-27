/*
String: indexOf() with from index
The indexOf method allows you to specify the position from which the search should start. This is done with a second parameter.
let n1 = 'White Rabbit'.indexOf('it', 1);
let n2 = 'White Rabbit'.indexOf('it', 3);
The first 'it' in 'White Rabbit' has the index 2. Starting our search at position 1 it will be found. n1 is 2. The second 'it' 
in 'White Rabbit' has the index 10. Starting our search at position 3 it will be found. n2 is 10.
Exercise

Write a function secondIndexOf, taking two strings and determining the second occurrence of the second string in the first string. 
If the search string does not occur twice, -1 should be returned.

Example: secondIndexOf('White Rabbit', 'it') should return 10.
*/
function secondIndexOf(str,str1){
  let low = str.toLowerCase();
  let high = str1.toLowerCase();
  let idx = str.indexOf(str1);
  return low.indexOf(high,idx+1);
}