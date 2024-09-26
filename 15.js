/*
Logging
Programming always includes the search for errors. One way to find errors is logging. During program execution, selective outputs are 
made. To do this in JavaScript, use the console.log function:
console.log('Hello console!');
Here, console.log outputs 'Hello console!'. Where you can see the output depends on your JavaScript environment. In browsers you do 
not see the log normally. But most desktop browsers have so-called developer tools. These are powerful tools to support web developers.
One of these tools is the console. The log is displayed there. How to open the developer tools depends on your browser. On many 
desktop browsers, they are opened with the F12 key. You can then select the console as a tab. Alternatively, you can open the 
console via the browser menu. The developer tools are not available on mobile devices. Therefore JS Hero writes the log additionally 
into the test output.

Exercise
Write a function log that logs 'Hello Console!'. If you are working with a desktop browser, open the developer tools to see the 
output there as well.
*/
function log(){
  console.log("Hello Console!");
}