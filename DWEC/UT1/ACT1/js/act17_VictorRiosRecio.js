/**17. Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10. */

"use strict"
{
    function countCharacters(text) {
        //variables for the text length and text length without spaces, replacing the sapces with regular expressions
        let textWithoutSpace = text.replace(/\s/g, '')
        let textLength = textWithoutSpace.length;

        
        return textLength;
        
    }
    //Testing out the function
    console.log("The length without spaces of the string introduced is: " + countCharacters("hola mundo"));

}