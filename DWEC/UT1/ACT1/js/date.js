"use strict"
{

    //class DATE
    let fecha = new Date
    console.log(fecha);

    let fecha2 = new Date("2017/12/11 14:30:15");
    console.log(fecha2);

    let fecha3 = new Date(2017,11,24,14,30,15,650);
    console.log(fecha3);        

    let fecha4 = new Date(2017,11,24);
    console.log(fecha4);

    let fecha5 = new Date("2017/0/24");
    console.log(fecha5);

    let fecha6 = new Date()

        //esto da el día de la semana
    console.log(fecha3.getDay());
    console.log(fecha3.getDate());
    console.log(fecha3.getMonth());
    console.log(fecha3.getFullYear());
    console.log(fecha3.getYear());//cuenta desde 1917
    console.log(fecha3.getTime());//ms desde 1970
    console.log(fecha3.getHours());
    console.log(fecha3.getMinutes());
    console.log(fecha3.getSeconds());
    console.log(fecha3.getMilliseconds());
    console.log(fecha3.getTimezoneOffset()); //diferencia entre hora utc y zona horaria actual
    
    fecha3.setFullYear(2000);
    console.log(fecha3);
    fecha3.setMonth(3);
    console.log(fecha3);//April
    fecha3.setDate(26); //day
    console.log(fecha3);
    fecha3.setHours(15);
    fecha3.setMinutes(45);
    fecha3.setSeconds(59);
    fecha3.setMilliseconds(700);
    console.log(fecha3);

    let str = fecha3.toDateString();
    console.log(str);
    let str2 = fecha3.toLocaleDateString();
    console.log(str2);

}