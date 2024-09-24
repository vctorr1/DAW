/*4. Utilizando un bucle, mostrar la suma, el producto y la media de los números introducidos
hasta introducir un número negativo y entonces mostrar el resultado. */

"use strict"

{
    function calculateStatistics() {
        let num;
        let sum = 0;
        let product = 1;
        let counter = 0;

        while (true) {
            num = parseInt(prompt("Enter a positive number or a negative number to stop."));

            if (isNaN(num)) {
                console.log("Please enter a number and not a String.");
                continue;
                
            }
            //We exit the loop if the number is minor than 0
            if(num < 0){
                break;
            }

            sum += num;
            product *=num;
            counter++;
            
        }

        if (counter ===0 ) {
            console.log("There were neither positive or negative values introduced");
        }else{
            let average = sum/counter;
            let result = `The total sum is ${sum}, the product ${product} and the average ${average}`
            console.log(result)
        }
        
    }

    calculateStatistics();

}