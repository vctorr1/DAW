/**11. Función para determinar si un número es par o impar USANDO FUNCIÓN RECURSIVA */

"use strict"

{
    //recursive function to determine if a number is even or odd
    function isEven(number) {
        //if the number its 0 then returns even
        if (number === 0) {
            return true; // Returns true indicating the number is even
        }
  
        //If the number introduced is 1 then its odd
        if (number === 1) {
            return false;
        }
  
        //f it's a negative number then we call the function again changing it to a positive value
        if (number < 0) {
            return isEven(-number);
        }
  
        //Reduce the number by 2 and call it again
        return isEven(number - 2);
  }

  //Testing out the function
  console.log(isEven(2))
}