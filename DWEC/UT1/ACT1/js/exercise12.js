/*12. Función para convertir entre Celsius y Fahrenheit*/

"use strict"
{
    //the function takes the temp value and unit
    function changeTemp(temp, unit){
        //returns farenheit if C is introduced
        if (unit.toUpperCase() === "C") {
          return (temp * 9/5) + 32 + "°F";
          //returns celsius if F is introduced
        } else if (unit.toUpperCase() === "F") {
          return (temp - 32) * 5/9 + "°C";
        }
        //If neither C or F are introduced returns an error message
        return "Unit not valid";
      };

    //Testing out the function
    console.log(changeTemp(100,"C"));
}
