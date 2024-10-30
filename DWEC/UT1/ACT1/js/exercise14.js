/**14. Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */

"use strict"
{
    //Made as arrow function because its pretty short
    const applySale = (price, sale) => price - (price * sale / 100);

    //Testing out the function
    console.log(applySale(100,20));
}