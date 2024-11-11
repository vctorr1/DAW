"use strict"
{

    function arrayAPrimo(array) {
        const esPrimo = (num) =>{
            if (num<2) return false;
            for (let i = 2; i < Math.sqrt(num); i++) {
                if (num % i === 0) return false;  
            }
            return true;
        }

        return array.filter(esPrimo);
    }

    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(array1);
    console.log(arrayAPrimo(array1));

}