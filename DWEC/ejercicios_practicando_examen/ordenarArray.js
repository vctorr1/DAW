"use strict"
{

    function ordenarArray(array) {
        return array.sort((a,b)=>b-a);
    }

    const numeros = [66, 46, 32, 30, 25, 42, 2, 3, 50, 56];

    console.log(numeros);
    console.log(ordenarArray(numeros));

}