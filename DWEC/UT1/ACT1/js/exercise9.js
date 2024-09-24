/**9. Realizar una pequeña calculadora, donde el programa solicite dos números y una operación
aritmética simple (+,-,*,/). El programa debe validar que los datos introducidos por el usuario
son correctos. Si no lo son, solicitarlos de nuevo, si lo son, mostrar el resultado. */

"use strict"

{
    function calculate(){
        //Initial prompts
        let num1 = parseInt(prompt("Enter the first number"));
        let num2 = parseInt(prompt("Enter the second number"));

        //while loops until both numbers are valid
        while(isNaN(num1) || isNaN(num2)){
            alert("You must enter valid numbers.");
            num1 = parseInt(prompt("Enter the first number"));
            num2 = parseInt(prompt("Enter the second number"));

        }
        //WHile loops until the arithmetic operator introduced is valid
        let operation = prompt("Now enter the type of operation that you want to do; +, -, *, or /.");
        while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
            alert("You must enter a valid operator.");
            operation = prompt("Enter the type of operation that you want to do; +, -, *, or /.");
        }

        //each operator activates a different case that calculates and prints the results
        let result = 0;
        switch (operation) {
            case "+":
                result = num1 + num2;
                console.log(`${num1} + ${num2} = ${result}`);
                break;
            case "-":
                result = num1 - num2;
                console.log(`${num1} - ${num2} = ${result}`);
                break;
            case "*":
                result = num1 * num2;
                console.log(`${num1} * ${num2} = ${result}`);
                break;
            case "/":
                result = num1 / num2;
                console.log(`${num1} / ${num2} = ${result}`);
            default:
                break;
        }

    }
    //Testing out the function
    calculate();

}