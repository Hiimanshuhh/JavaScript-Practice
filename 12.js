/*
  Strings

  We have seen that a variable is a container for a value. A value can be a text like 'Hello world!'. Values have a type. The type of 
  'Hello world!' is string. You can use single or double quotes. 'Hello world!' is the same string as "Hello world!".
  You can work with strings. For example, they can be concatenated. This is done with the + sign. 'Java' + 'Script' results in the 
  string 'JavaScript'. The following function appends ' is great!' to the passed parameter and returns the result:
  function praise(name) {
    return name + ' is great!';
  }
  praise('JavaScript') will return 'JavaScript is great!'.

  Exercise
  Write a function greet having one parameter and returning 'Hello <parameter>!'.

  Example: greet('Ada') should return 'Hello Ada!' and greet('Grace') should return 'Hello Grace!'.
*/
function greet(str){
  return "Hello "+str+"!";
}
let result = greet("Himanshu");