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
    function printPiramid(character, num) {
        let outputArray = Array(num).fill(character);
        for(let i = 0; i <= outputArray.length; i++)
            console.log(outputArray);
            outputArray--;
        
    }
    
    
    printPiramid("A", 5);
    

}