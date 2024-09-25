/*
  Function calls
  The difference between the definition and the call of a function is important. The following definition of a function
  function f() {
    return 'hello';
  }
  says what the function will do: Return 'hello', if called. The function will not be executed, but only provided. Only with its call
  let x = f();
  the function is executed. Every instruction in the function block is executed in order. The result of the function in the example 
  above will be assigned to the variable x. To define a function use the keyword function. If the function is assigned to a variable, 
  the function is called via this variable. Functions are defined once so that they can be used multiple times at different program 
  points by calling them.

  Exercise
  1. Define a function greet returning the value 'Haydo!'.
  2. Declare a variable salutation. Call the function greet and assign the result of the call to the variable salutation.
*/
function greet(){
  return 'Haydo!';
}
let salutation = greet();