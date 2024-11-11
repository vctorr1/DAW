"use strict"
{

    function borrarDuplicados(array) {
        let new_array = [];
        array.forEach(element => {
            if (!new_array.includes(element)) {
                new_array.push(element);
            }
        });

        return new_array;
    }

    let array1 = [1,2,3,5,5,5,7,8,true,true,false,"hola","hola","adios"];

    console.log(array1);
    console.log(borrarDuplicados(array1));

}