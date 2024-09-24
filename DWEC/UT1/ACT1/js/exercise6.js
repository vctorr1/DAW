/** 6. Mostrar todos los números impares que hay entre dos números introducidos por el usuario. */

"use strict"

{
    function showNum() {
        let num1;
        let num2;

        //Simple prompts and while loop to print each number iteration until the second number given.
        num1 = parseInt(prompt("Enter the first number"));
        num2 = parseInt(prompt("Enter the second number"));
        console.log("The indicated numbers and their intermediated ones are: ");
        while (num1<=num2){
            
            //bit test (I had to search the internet for good ways to solve this, as i was stuck.)
            //This tests if the first bit is on which signifies an odd number.
            if (num1 & 1) {
                console.log(num1 + ", ");
            }
            num1++;
        }
        
    }

    //Trying out the function
    showNum();

}