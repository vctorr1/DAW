/**15. Indica si un NIF es válido o no. */

"use strict"
{   //FUnction yo determine wether a spanish NIF is valid or not
    function validateNIF(nif) {
        //first we save the posible letters
        const lettersArray = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

        //THE lenght of the nif is validated first
        if(nif.length!==9){
            //Changed each error comment for debugging
            console.log("wrong NIF length.");
            return false;
        }

        //Then we take the numbers to perform the calculation (https://www.interior.gob.es/opencms/es/servicios-al-ciudadano/tramites-y-gestiones/dni/calculo-del-digito-de-control-del-nif-nie/)
        //const nifNum = nif.slice(0,7);
        const nifNum = nif.slice(0,-1);

        //we can use another conditional to return false if the introduced numbers are not numbers
        //final error was that I was using nif instead of nifNum for this
        if(isNaN(nif)){
            console.log("the NIF introduced is not valid.");
            return false;
        }

        let nifLetter = nif.slice(-1);

        //WE calculate the correct possition of the letter index and use it to guess the correct one
        let nifLetterIndex = parseInt(nifNum) % 23;
        let nifLetterVerified = lettersArray[nifLetterIndex];

        //Last conditional to return true if the given letter is the same as the verified one
        if (nifLetter === nifLetterVerified) {
            console.log("The introduced NIF is correct.");
            return true;
        }
    }
    //testing it out
    validateNIF("30278397R");

}