"use strict"
{

    setTimeout(function(){
        console.log("setTimeout");
    }, 3000);

    //interval es para que se repita
    let id = setInterval(() => {
        console.log("setInterval");
    }, 2000);

   
    setTimeout(() => clearInterval(id), 7000);

    

}