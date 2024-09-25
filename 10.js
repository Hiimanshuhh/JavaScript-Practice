/*
  Parameters
  Now we get to know functions with parameters. With
  function give(input) {
    return input;
  }
  we define a function that simply returns the parameter input. Parameters are variables. With
  let result = give('apple');
  we call the function and pass it the argument 'apple'. The function will be executed. The argument 'apple' will be assigned to the 
  parameter input. input gets the value 'apple'. The variable input is returned in the single code line of the function. This return 
  is assigned to the variable result. Finally, result has the value 'apple'.

  Exercise
  Write a function echo that also returns the passed parameter. echo('Greta') should return 'Greta' and echo('CO2') should 
  return 'CO2'
*/

function echo(variable){
  return variable;
}
let result = echo("Greta");