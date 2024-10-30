/**33. Programa una función que valide que un texto sea un nombre válido, p.e. miFuncion (“Javier
Ferrer”) devolverá verdadero. NOTA: No puede haber números ni caracteres especiales como
¡ o ¿
 */
"use strict"
{
    function testName(name) {
        //+ if the first name is compound
        let regex = /^[a-zA-Z\s]+/;
       return regex.test(name);
    }

    console.log(testName("Javier Perez"));
    console.log(testName("1v1ct0r"));
    console.log(testName("Victor"));

}