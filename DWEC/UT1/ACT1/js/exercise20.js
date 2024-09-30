/**20. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

"use strict"
{   //the function isgiven the text and number of repetitions
    function repeatText(text, repetitions) {
        //we add a space after every text iteration
        text += " ";
        let multipliedText = text.repeat(repetitions);
        
        return multipliedText;
    }

    //testing out the function
    console.log(repeatText("hola Mundo", 2));

}