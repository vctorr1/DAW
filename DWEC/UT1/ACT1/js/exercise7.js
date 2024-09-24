/*7. Mostrar todos los números divisores de un número introducido por el usuario.*/

"use strict"

{
    function showDivs() {
        //single prompt for the number that we need
        let num1 = parseInt(prompt("Enter the number that you want to see the divisors for"));
        console.log(`The divisor numbers of ${num1} are: `);

        //for loop that goes from 1 to the given number, and if it's a divisor of the given number, gets printed on console
        for(let i = 1; i <= num1; i++){
            //if loop that activates if the rest of the division is 0
            if(num1 % i === 0){
                console.log(i);
            }
        }
    }

    //Trying out the function
    showDivs();


}