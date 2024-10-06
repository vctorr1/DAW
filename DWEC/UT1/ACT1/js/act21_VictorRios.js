/*21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
"use strict"
{   
    function invertString(text){
   
        //the array is split, then reversed, then joined and displayed
        let text_array = text.split("");
        text_array.reverse();
        let output_text = text_array.join("");
        
        console.log(output_text);

    }

    //testing out the function
    invertString("hola me llamo juan")

}