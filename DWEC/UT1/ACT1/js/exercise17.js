/**17. Función para contar caracteres de una cadena */

"use strict"
{
    function countCharacters(text) {
        //variables for the text length and text length without spaces, replacing the sapces with regular expressions
        let textWithoutSpace = text.replace(/\s/g, '')
        let textLength = textWithoutSpace.length;

        
        return textLength;
        
    }

    console.log("The length without spaces of the string introduced is: " + countCharacters("hola mundo"));

}