/**22. Programa una función para contar el número de veces que se repite una palabra en un texto
largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

"use strict"

{
    function countString(text, parameter){
        //set the regular expresion
        let regex = new RegExp(parameter, "gi");
        //search on the text with it
        let match_array = text.match(regex);
        //asign the length of the array to the counter
        let final_count = match_array.length
        return final_count;


    }

    console.log("La palabra se repite "+ countString("hola que tal como estas hola hola", "hola") + " veces.");

}