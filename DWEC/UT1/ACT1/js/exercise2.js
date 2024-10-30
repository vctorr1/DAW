/*2. Modifica el programa anterior: si los números no son un número o son menores o iguales a
ceros, que los vuelva a pedir.*/

"use strict"

{

    function compareNumbers() {
        let num1, num2;
    
        //We use the isNanN() function to make sure that the loop goes on until the prompt values are numbers and also until the numbers are bigger than 0
        while (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
            //The prompt text is converted to integers
            num1 = parseInt(prompt("Enter the first number:"));
            num2 = parseInt(prompt("Enter the second number:"));
            
            //If the conditions are the same after the prompts, an alert appears
            if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
                alert("Please, enter two numbers biggers than zero.");
            }
        }
        
        //With correct values, the function continues to the compare senction
        if (num1 > num2) {
            console.log(num1 + " is bigger than " + num2);
        } else if (num2 > num1) {
            console.log(num2 + " is bigger than " + num1);
        } else {
            console.log(num1 + " and " + num2 + "are equal.");
        }
    }
    
    //Testing out the function
    compareNumbers();


}