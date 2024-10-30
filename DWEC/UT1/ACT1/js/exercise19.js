/**19. Programa una función que dada una String te devuelva un Array de textos separados por cierto carácter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

"use strict"
{
    //Function with text and charachter to split at parameters
    function splitText(text, character) {
        //Splits the text into an array using the given character
        const textArray =  text.split(character);
        //Prints the array using forEach function
        textArray.forEach(element => {
            console.log(element);
        });


        
    }
    //Testing out the function
    console.log(splitText("holaaa aaa a a wo", " "));

}