/**24. Programa una función que elimine cierto patrón de caracteres de un texto dado, pe.
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
 */

"use strict"

{
    function removePattern(text, pattern) {
        //We create a regular expression from the pattern
        //The 'g' flag makes it global, so it replaces all occurrences
        const regex = new RegExp(pattern, 'g');
        
        //Use the replace method with the regex to remove the pattern
        return text.replace(regex, '');
    }

    //Testing out the function
    console.log(removePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));

}