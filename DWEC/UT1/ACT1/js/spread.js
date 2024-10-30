"use strict"
{
    //sirve para hacer copia por valor de un array o de un objet literal

    let v3 = ["hello"];
    let v4 = [...v3];

    v3.push("bye");
    console.log(v3);
    console.log(v4);

    let person = {
        name: "Federico",
        age: 30,
        city: "Sevilla"
    }

    let person2 = person;

    person.name="Guillermina";
    console.log(person);
    console.log(person2);

    let person3 = {...person};
    person["name"]="Francisca";
    console.log(person);
    console.log(person3);

    //... es el spread operator
    let array1 = [1,2,3,4,5];
    let array2 = [6,7,8,9,10];
    let array3 = [...array1, ...array2];
    console.log(array3);


    

}