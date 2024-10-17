/**36. Programa una función que dado un array devuelva el número más alto y el más bajo de dicho
array, p.e. miFuncion([1,5,34,99,-2]) devolverá [99,-60] */
"use strict"

{
    function getMaxMin(numArray){
        //min and max methods from the math library, but using deestructuring to work with arrays
        let maxNum = Math.min(...numArray);
        let minNum = Math.max(...numArray);

        const resultArray = []; 
        //then the results to the results array
        resultArray.push(minNum, maxNum);
        return resultArray;
    }

    const myArray = [1,2,3,4,5,6,7,8,9,10];
    console.log(getMaxMin(myArray));
}