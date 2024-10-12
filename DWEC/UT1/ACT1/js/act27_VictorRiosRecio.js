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
    function evenOrOdd(numArray){
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

        //return "there are " + evenNums.length + " even numbers, "
        //returns an object literal for ease of displaying the results
        return {
            evenTotal: evenNum.length,
            oddTotal: oddNum.length,
            evenNums: evenNum,
            oddNums: oddNum
        }
    }
    //results displayed by using literal object and array methods
    console.log("there are " + evenOrOdd(numArray).evenTotal + " even numbers.");
    console.log("there are " + evenOrOdd(numArray).oddTotal + " odd numbers.");
    console.log("the even numbers are " + evenOrOdd(numArray).evenNums.join() + ".");
    console.log("the odd numbers are " + evenOrOdd(numArray).oddNums.join() + ".");

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

    //e. Cuántos son primos y cuáles son.
    //as of exercise "b", i'll use object literals for displaying the result too, copying from it a bit
    function isPrime(numArray){
        //prime nums array
        let primeNums = [];
      
        //internal function inside the orevius b function for determining if the numbers are prime or not
        function isPrimeInternal(num) {
          if (num <= 1) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            //returns false if is  not  a prime number
            if (num % i === 0) return false;
          }
          //
          return true;
        }

        //loops through the array adding each prime number to the array
        numArray.forEach(num => {
            if (isPrimeInternal(num)) {
                primeNums.push(num);
            }
        });
      
        //returns an object literal with all the data
        return {
          primeTotal: primeNums.length,
          primeNumbers: primeNums
        };
    }
    //Results displayed through object literals
    console.log("there are " + isPrime(numArray).primeTotal + " prime numbers.");
    console.log("the prime numbers are " + isPrime(numArray).primeNumbers.join() + ".");

    //f. Los números que ocupan las posiciones pares del vector.
    function getArrayEvenIndex(numArray) {
        let arrayEvenIndexes = [];

        numArray.forEach(num => {
            //if the index is even then it is pushed to the evenIndexs array
            if (num % 2 === 0) {
                arrayEvenIndexes.push(num);
            }
        });
        return arrayEvenIndexes;
    }
    console.log("the numbers in the even index positions of the array are: " + getArrayEvenIndex(numArray));



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

    //k. Buscar un valor introducido por el usuario e indicar si existe o no. ARREGLAR
    /*function findValue(numArray, value) {
        let foundValue = numArray.find(value);
        console.log(foundValue);

        //if the value is found inside the array and is a number then 
        if ((foundValue = find(numArray, value)) !== false || isNaN(foundValue) !==false) {
            console.log("the value was found");
            return true;
        }else{
            console.log("the value was not found");
            return false;
        }
    }*/

    function findValue(numArray, value) {
    //includes instead of find because it returns true if found even just one time
    let foundValue = numArray.includes(value);

    if (foundValue) {
        console.log("The value was found.");
        return true;
    } else {
        console.log("The value aws not found.");
        return false;
    }
    }

    console.log(findValue(numArray, 2));
    

}