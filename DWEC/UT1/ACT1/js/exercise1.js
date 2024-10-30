/*1. Dados dos números indicar cuál es mayor, menor o si son iguales.*/

"use strict"

{
    function compareNumbers(num1=0,num2=0){
        //Simple if conditionals that compare if either number is bigger than the other
        if (num1<num2) {
            console.log(num2 + " is bigger than " + num1);
        }else if(num1>num2){
            console.log(num1 + " is bigger than " + num2);
        }else{
            console.log(num1 + " and " + num2 + "are equal.");
        }

    }

    //Trying out the function
    compareNumbers(2,8);

}