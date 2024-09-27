/*
  String: replace()
  The replace method replaces a substring with another:
  let str = 'JavaScript';
  let newstr = str.replace('Java', 'ECMA');
  'Java' is replaced with 'ECMA'. Thus newstr has the value 'ECMAScript'. The original string remains unchanged. Only the first 
  occurrence is replaced:
  let newstr = 'Dada'.replace('a', 'i');
  newstr has the value 'Dida' and not 'Didi'.

  Exercise
  Write a function normalize, that replaces '-' with '/' in a date string.

  Example: normalize('20-05-2017') should return '20/05/2017'.

*/
function normalize(date) {
  let newDate = date.replace('-','/');
  newDate = newDate.replace('-','/');
  return newDate;
}