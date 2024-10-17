/**32. Programa una función que dada una cadena de texto cuente el número de vocales y
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */
"use strict"

{

    function getLetters(text) {
        //first the string is converted into a letters array
        let lettersArray = text.split("");
        let vocals = "aeiou";
        let vocalCounter = 0;
        let otherCounter = 0;

        //we loop through it using reduce
        lettersArray.reduce((acumulator, letter)=>{
            //include returns true if it finds any macth
            if(vocals.includes(letter)){
                vocalCounter++;
            }else{
                otherCounter++;
            }
            return vocalCounter, otherCounter;
        });

        return "vocals: "+vocalCounter + " Consonants: " + otherCounter;
    }

    console.log(getLetters("hola mundo"));

}