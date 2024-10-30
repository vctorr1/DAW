"use strict"

{

    let users = [
        {name: "john", age: 6},
        {name: "johnn", age: 8},
        {name: "johnnn", age: 7}
    ];
    //some
    let exists = users.some(function (user){
        //devuelve true si hay algun user que
       return  user.age==10;
    });

    console.log(exists);
    exists = users.some((user)=>user.age==8);
    console.log(exists);

    //findIndex devuelve el indice de elemento que cumpla con el parametro de entrada
    let index = users.findIndex(function(user){
        return user.age == 7;
    });
    console.log(index);

    //concat sirve para juntar  dos arrays en uno
    let array1 = ["a","b","c"];
    let array2 = ["d","e","f"];
    let array3 = array1.concat(array2);
    console.table(array3);
    //esto es lo mismo
    let array4 = [...array1, ...array2];
    console.table(array4);

    //reduce (acumulador, valorActual)
    let myNumbers = [1,2,3,4,5];
    let answer = myNumbers.reduce(function (acumulador, numActual) {
        acumulador+= numActual;
        return acumulador;
    });
    console.log(answer);
    answer = myNumbers.reduce((acumulador,numeroActual)=>acumulador + numeroActual);

    console.log(answer);

    answer = users.reduce((acum, user)=>{
        
        acum.age +=user.age;
        return acum;
    });
    console.log(answer);

    //concatenar nombres
    answer = users.reduce((acum, user)=>{
        
        acum +=user.name;
        return acum;
    }, "");//el tercer valor que se pasa es el valorpor defecto del acumulador, le pasamos esto para que sea por defecto string
    console.log(answer);
    console.log(users);

    //includes
    let motorbikes = ["Yamaha", "Ducatti", "Honda"];
    motorbikes.includes("Vespa"); //False
    motorbikes.includes("Yamaha"); //True

    //Formas de iterar sobre arrays
    users.forEach(function(name, position){
        console.log("name " + name + " in position " + position);
    });
    //como funcion flecha
    users.forEach((name, position)=>{
        console.log("name " + name + " in position " + position);
    });

    //Otra forma es con map, que devuelve un array nuevo
    //map
    let array6 = array4.map(function(name){
        return name + "x";
    })
    console.log(array6);
    console.log(array4);


    let users1 = [
        {name: "john", age: 6},
        {name: "johnn", age: 8},
        {name: "johnnn", age: 7}
    ];
    //map que devuelva solo los nombres
    let users2 =  users1.map(function (user) {
        return user.name;
    })
    console.log(users2);

    let numbers1 = [1,2,3,4,5,6,7,8,9,10];

    //map que devuelva el doble de cada valor
    let numbers2 = numbers1.map(function (number) {
        return number*2;
    })
    console.log(numbers2);

    //otra forma de recorrer un array es con un for of
    for(let user of users){
        console.log(user);
        users1.push(user.name);
    }
    console.log(users1);
    



}