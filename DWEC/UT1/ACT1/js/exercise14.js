/**14. Función para calcular el monto final después de aplicar un descuento */

"use strict"
{
    //Made as arrow function because its pretty short
    const applySale = (price, sale) => price - (price * sale / 100);

    //Testing out the function
    console.log(applySale(100,20));
}