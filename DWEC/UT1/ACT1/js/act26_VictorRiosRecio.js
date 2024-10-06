/**26. Comprueba que una cadena empieza con las letras “m” o “d” y además termina con las letras
“a” o “o”. Realiza el ejercicio con funciones de cadena y con expresiones regulares. */

"use strict"
{   //First the function with string methods
    function checkStringWithMethods(str) {
        //we convert the string to lowercase to make the check case-insensitive
        str = str.toLowerCase();
        
        //then we check if the string starts with 'm' or 'd'
        const startsCorrectly = str.startsWith('m') || str.startsWith('d');
        
        //check if the string ends with 'a' or 'o'
        const endsCorrectly = str.endsWith('a') || str.endsWith('o');
        
        //finally return true only if both conditions are met
        if (startsCorrectly && endsCorrectly) {
            return true;
        } else{
            return false;
        }
      }

      //Function with regular expressions
      function checkStringWithRegex(str) {
        //^ asserts the start of the string, [md] matches either 'm' or 'd', .* matches any characters in between, [ao] matches either 'a' or 'o'
        //$ asserts the end of the string, i flag makes the regex case-insensitive
        const regex = /^[md].*[ao]$/i;
        
        //Test the string against the regular expression (returns true if it's correct, just another way of doing this)
        return regex.test(str);
      }

      //testing out both functions
      
      

}