/**18. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola". */
"use strict"

{   //The function uses a text and position parameter, that then uses alongside the substring function
    function cutText(text, position) {
        let finalText = text.substring(0, position);
        return finalText;

    }

        //testing out the function
    console.log("El texto recortado es " + splicedText("Hola mundo", 4) + ".");

}