/*
  Functions
  A function is a block of statements that can be executed as often as you like. A function can have parameters and can return a value.
  Functions can be defined in different ways. Perhaps the most common one is the function declaration. It starts with the keyword
  function. It follows:
  -> the name of the function,
  -> the parameters enclosed in round parentheses,
  -> the statements enclosed in curly brackets.
  With the keyword return a value can be returned. At the same time return terminates the function. Statements after a return will not
  be executed. With
  function color() {
    return 'red';
  }
  we define a function that returns the value 'red'. The function has no parameters (the parentheses are empty) and contains only the 
  return statement. The function is assigned to the variable color. 
  The function is called by its name:
  let result = color();
  Now the function is executed. Its return is assigned to the variable result. result therefore has the value 'red'.

  Exercise
  Define a function hello that returns 'Hello world!'.
*/
function hello(){
  return 'Hello world!';
}
