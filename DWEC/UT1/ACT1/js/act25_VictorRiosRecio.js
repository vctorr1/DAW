/**25. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en
un sentido que en otro), pe. miFuncion(2002) devolverá true. */

"use strict"

{
    function isNumberPalindrome(num) {
        const numString = num.toString();
        
        //Convert the number string to an array, reverse it, and join it back to a string
        const reversedNum = numString.split('').reverse().join('');

        //if they're the same, return true
        if (reversedNum === numString) {
            return true;
        }else{
            return false;
        }


    }

    //Testing it out
    console.log(isNumberPalindrome(2002));

}