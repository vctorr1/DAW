/**16. Crea una función para dibujar un patrón de diente de sierra inverso en un cuadro de texto.
Con un carácter y un número que indique el mayor número de caracteres en la base (inversa)
del patrón.
Ejemplo 1. Datos de entrada: 'A' y 5
AAAAA
AAAA
AAA
AA
A
s */

"use strict"
{
    /*function printPiramid(character, number) {
        let output = [character]*number;

        for (let i = 1; i <= number; i++) {
            for(let j = 1; j <= i; j++){
                output += j;
            }
            console.log(output);
            
            
        }
    }*/
    //De momento no lo consigo
    /*function printPiramid(character, num) {
        let outputArray = Array(num).fill(character);
        for(let i = 0; i <= outputArray.length; i++)
            console.log(outputArray);
            outputArray--;
        
    }
    
    
    printPiramid("A", 5);*/
    //The function uses a character to represent and the max number of characters to be displayed
    function printPiramid(character, numCharacters) {
        //We initialize an empty array to store each line
        let outputArray = [];
    
        //Loop from number introduced to 1
        for (let i = numCharacters; i > 0; i--) {
            //we repeat the character the number of times passed by the loop counter (I finally could think of how to do it thanks to exeercise 20!)
            let line = character.repeat(i);
            //append the line as a last element of the array thanks to the array.push method.
            outputArray.push(line);
        }
    
        //Make each line start on a new line
        return outputArray.join('\n');
    }
    
    //Testing it out
    console.log(printPiramid('A', 5));
    

}