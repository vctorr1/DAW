/**41. Programa una función que obtenga un numero aleatorio entre 501 y 600. */
"use strict"
{
    function randomNum(min, max) {
        //(the final number is rounded becasue random max can't get exactly 1)
        return (Math.round(Math.random()*(max-min)+min));
    }
    console.log(`The random number is ${randomNum(501,600)}`);


}