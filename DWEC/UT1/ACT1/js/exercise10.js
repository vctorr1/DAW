/**10. Programa una función que determine si un número es primo (aquel que solo es divisible por
sí mismo y 1) o no, pe. miFuncion(7) devolverá true
 */

"use strict"

{
    function isPrime(num1){
        //If conditional returns false if number is minor or equal to 2, as prime numbers are bigger than 2
        if(num1 <= 2) return false;
        //Then loops until it reaches the number square root, returning false if it finds any divisors or true if it doesnt find any.
        for(let i = 2; i <= Math.sqrt(num1); i++){
            if(num1 % i === 0) return false;
        }
        return true;

    }

    //Trying out the function
    console.log(isPrime(18));

}