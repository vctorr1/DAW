/**23. Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee
igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

"use strict"

{
    function isPalindrome(text) {
        //We convert the input to lowercase and remove non-alphanumeric characters
        const cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        //Convert the cleaned string to an array, reverse it, and join it back to a string
        const reversedText = cleanText.split('').reverse().join('');

        //if they're the same, return true
        if (reversedText === cleanText) {
            return true;
        }else{
            return false;
        }


    }

    //Testing out the function
    console.log(isPalindrome("Salas"));
    console.log(isPalindrome("Hello"));

}

