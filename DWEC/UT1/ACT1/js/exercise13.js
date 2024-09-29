/**13. Función para calcular el factorial de un número */

"use strict"
{
    function calculateFactorial(num){
        //We declare and initialize the result variable, to multiply it later by the loop counter
        let result = 1;

        //If the number is 0, return 1
        if (num === 0) {
            return 1;
        }
        //We multiply the result by each number from 1 to the introduced
        for (let i = 1; i <= num; i++) {
            result *= i;
        }

        //Return the result
        return result;
    }

    //Testing out the function
    console.log(calculateFactorial(6));

}