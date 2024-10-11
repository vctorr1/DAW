/**27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no. */
"use strict"
{   //NumArray for later use
    let numArray = [1,2,3,4,5,6,7,8]

    //a. El número de elementos del vector.
    console.log(numArray.length);

    //b. Cuántos son pares y cuántos impares y cuáles son.
    numArray
    

    //c. La suma de todos los números negativos.
    /*function printNegSum(numArray){
        if(isNaN(numArray)){
            numArray.forEach(num => {
                if(num <0 ){
                    let negSum = num;
                    let negSumTotal =+ negSum;
                    return negSumTotal;
                }
            
            })
        }
    };*/
    //array with negative numbers
    let negNumArray = [-1,2,3,-4,5,-6,-7,-8]

    function printNeg(numArray) {
        let negNumbers = numArray.filter(function(num){
            return num < 0; 
        })

        /*negNumbers.forEach(negNum => {
            console.log("The current negative number is " + negNum);
            
        });*/
        //array.reduce is used to sum all of the array values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        console.log("The combined values of all the negative numbers is " + negNumbers.reduce((acum, currentValue) => acum + currentValue, 0,));
        
    }

    console.log(printNeg(negNumArray));

    //d. El producto de todos los números positivos.
    numArray.forEach(num => {
        let prod = "The product of the number " + num + " is " + num*num;
        console.log(prod);
    });

    //g. El número mayor.                           //apply must be used or else it will return NaN
    console.log("el mayor número del array es " + Math.max.apply(Math, numArray));

    //h. El número menor.
    console.log("el menor número del array es " + Math.min.apply(Math, numArray));

    /**i. La media de todos los números, los números que están por encima y los que están por
    debajo. */
    function sum(numArray){
        //returns the sum of the array elements so it can be used to find the average
        return numArray.reduce((acum, currValue) => acum + currValue, 0);
    }
    //calculate the average
    let avg = (sum(numArray) / numArray.length);

    console.log("the average of all the array values is  " + avg);

    //j. El vector ordenado de mayor a menos y viceversa.
    let numArrayUnsorted = [6,3,7,3,2,1,];
    console.log(numArrayUnsorted);
    let sortedArray = numArrayUnsorted.sort();
    //Sorted in two ways
    console.log(sortedArray);
    console.log(sortedArray.reverse());

    //k. Buscar un valor introducido por el usuario e indicar si existe o no.
    function findValue(numArray, value) {
        let foundValue = numArray.find(value);
        console.log(foundValue);

        if ((foundValue = find(numArray, value)) !== false || isNaN(foundValue)) {
            console.log("the value was found");
            return true;
        }else{
            console.log("the value was not found");
            return false;
        }
    }

    console.log(findValue(numArray, 2));
    

}