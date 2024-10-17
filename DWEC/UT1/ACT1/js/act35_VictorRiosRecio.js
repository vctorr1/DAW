/**35. Programa una función que dado un array numérico devuelve otro array con los números
elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */

"use strict"

{
    let numArray = [1,2,3,4,5,6,7,8,9,10];

    //function to map an array 
    function arrayMapSquared(numArray) {
        //map is used to create a new array with the suqared numbers
        let squaredArray = numArray.map((number)=> number*number);
        return squaredArray;
        
    }

    //testing the function showing the unaltered array first
    console.log(numArray);
    console.log(arrayMapSquared(numArray));


}

