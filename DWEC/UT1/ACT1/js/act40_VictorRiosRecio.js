/**40. Programa una función para devolver la edad de una persona dada su fecha de nacimiento en este formato dd/mm/aaa. */
"use strict"
{
    function calculateAge(birthdate) {
        //turning the date string into an array
        const birthdateArray = birthdate.split("/").map(Number);

        //const today = Date();
        const today = new Date();
        //Date contrtuctor requires YYYY/MM/DD format, so the date array must be reversed
        //const currentDate = [today.getDate(), today.getMonth(), today.getYear()];
        let reversedArray = birthdateArray.reverse();
        const currentDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];

        //calculate the difference of the years first
        let age = currentDate[0] - reversedArray[0];

        //calculate if the birthday has passed
        if (currentDate[1] < reversedArray[1] || (currentDate[1] === reversedArray[1] && currentDate[2] < reversedArray[2])) {
          age--;
        }

        return age;
        
    }

    console.log(`I am ${calculateAge('23/02/2000')} years old.`);

}