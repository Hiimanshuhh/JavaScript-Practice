/*
Logging and Strings
Now we want to practice logging together with string concatenation.

Exercise
Write a function shout that takes a string and returns this string duplicated. In addition, the return should be logged.

Example: shout('Fire') should return 'FireFire' and should log 'FireFire'.
*/
function shout(str){
  let rep = str+str;
  console.log(rep);
}
let result = shout("Fire");