/*5. Mostrar todos los números que hay entre dos números introducidos por el usuario.*/

"use strict"

{
    function showNum() {
        //WE declare the necesary variables
        let num1;
        let num2;

        //Simple prompts and while loop to print each number iteration until the second number given.
        num1 = parseInt(prompt("Introduzca el primer número"));
        num2 = parseInt(prompt("Introduzca el segundo número"));
        console.log("The indicated numbers and their intermediated ones are: ");
        while (num1<=num2){
            console.log(num1 + ", ");
            num1++;
        }
        
    }

    //Trying out the function
    showNum();

}