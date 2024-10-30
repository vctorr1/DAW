"use strict"
{

    //class MATH 
    //esto primero son constantes de la clase Math
    console.log(Math.E);
    console.log(Math.PI);

    let n = 37.6;
    console.log(Math.floor(n)); //37
    console.log(Math.ceil(n)); //38
    console.log(Math.round(n)); //38
    console.log(Math.trunc(n)); //37 trunc se queda con la parte entera
    console.log(Math.floor(-1.7)); //-2

    console.log(Math.abs(n)); //valor absoluto
    console.log(Math.min(-27,40,65)); //-27
    console.log(Math.max(-27,40,65));
    console.log(Math.pow(2,10));//potencia 2 elevado a 10 1024
    console.log(Math.random()); //num aleatorio entre 0 y 0.99999999999999999999999999999999
    //random between 0 and 10
    console.log(Math.round(Math.random()*10));

    //random between 20 and 30
    let min=20;
    let max=30;
    console.log(Math.round(Math.random()*(max-min)+min));
    console.log(Math.floor(Math.random()*(max-min+1)+min));

    //random between -50 and -40
    min=-50;
    max=-40;
    console.log(Math.round(Math.random()*(max-min)+min));
    console.log(Math.floor(Math.random()*(max-min+1)+min));
    

}