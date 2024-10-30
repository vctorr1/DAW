/**39. Programa una función que dado un array de elementos, elimine los duplicados, pe.e mi Funcion (“x”,10,”x”,2,”10,10, true,true) devolverá [“x”,10,2,”10”,true] */
"use strict"
{

    function deleteDuplicates(numArray) {
        let nonDuplicates = [];
        numArray.forEach((element)=>{
            //if the nonduplicate array doesnt inlcude the element, push it.
            if(!nonDuplicates.includes(element)){
                nonDuplicates.push(element);
            }
        })
        return nonDuplicates;
        

    }
    
    const array1 = ["X", 22, 21, true, "hola", "hola", 22, 23, false, true];

    console.log(`El array original es: ${array1}`);
    console.log(`El array sin duplicados es: ${deleteDuplicates(array1)}`);
    console.log(array1);

}