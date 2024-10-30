/**38. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] } */

"use strict"
{
    function sortNums(numArray){
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted
        //sort the array content to another copy using toSorted because it doesn't modify the original array
        /*const minSortedArray = numArray.sort((a,b)=> a - b);
        const maxSortedArray = numArray.sort((a,b)=> b - a);*/
        
        const minSortedArray = numArray.toSorted((a,b)=> a - b);
        //we could also just reverse this array
        const maxSortedArray = numArray.toSorted((a,b)=> b - a);

        return{
            minToMax: minSortedArray,
            maxToMin: maxSortedArray
        }

    }
    //example array for sorting
    let numArray = [1,2,3,4,5,6,7,8,9,10];

    console.log(sortNums(numArray));

}