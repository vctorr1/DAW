/**37. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

"use strict"
{   //function that returns literal objects
    function getEvenOdd(numArray){
        let evenNum = [];
        let oddNum = [];

        //loop through the array pushing the current number to even or odd array when necesary
        numArray.forEach(num => {
            if (num % 2 === 0) {
                evenNum.push(num);
            }else{
                oddNum.push(num);
            }
        });

        //returns an object literal for ease of displaying the results
        return {
            evenNums: evenNum,
            oddNums: oddNum
        }
        

    }
    //testing array
    let numArray = [1,2,3,4,5,6,7,8,9,10];
    let numArray2 = [25,44,75,96,789,168,384,787];

    console.log("the even number and odd numbers are " + getEvenOdd(numArray).evenNums + " and " + getEvenOdd(numArray).oddNums + ".");

}