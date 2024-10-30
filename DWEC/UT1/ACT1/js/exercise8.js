/**8. Mostrar la tabla de multiplicar de un número introducido por pantalla. */

"use strict"

{
    function showMultiples() {
        //single prompt for the number that we need
        let num1 = parseInt(prompt("Enter the number that you wish to see the multiples", "0"));
        console.log(`The multiplication table of ${num1} is: `);

        //for loop from 1 to 10, multiplying the counter by the given number
        for(let i = 1; i <= 10; i++){
            let result = num1 * i;
            console.log(`${num1} x ${i} = ${result}`);
        }
        
    }

    //Trying out the function
    showMultiples();
    
}