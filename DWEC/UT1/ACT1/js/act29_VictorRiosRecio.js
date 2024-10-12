/**29. Programa  una  función  para  convertir  números  de  base  binaria  a  decimal  y  viceversa,  pe. 
miFuncion(100,2) devolverá 4 base 10 */
"use strict"

{
    //helpful article on how to do it https://ed.team/blog/sistemas-binarios-y-decimales
    function binToDec(num1, numBase) {
        //if the origin abse is 2 (binary), convert to int using parseInt
        if (numBase === 2) {
            return parseInt(num1, 2);
        }else if (numBase === 10){
            //if not then change it to string
            return num1.toString(2);
        }else {
            return "Use base 2 for binary or 10 for decimal";
        }

    }
    console.log(binToDec(100,2));
    console.log(binToDec(100,10));


}