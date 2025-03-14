// NOR

// In the last task you have coded a so-called NAND (Not AND) gate. NAND gates are a standard component in digital electronics. Any Boolean function can be implemented by using a combination of NAND gates. Here you will get to know another standard gate, the NOR (Not OR) gate.
// Exercise
// Write a function nor that takes two Boolean values. If both values are false, the result should be true. In the other cases the return should be false.

// I.e.: The call nor(false, false) should return true. The calls nor(true, false), nor(false, true) and nor(true, true) should return false.

function nor(str,strg){
   return !(str||strg);
}
