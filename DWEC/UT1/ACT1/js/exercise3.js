/*3. Dada una hora en horas, minutos y segundos, indicar qué hora será pasado un segundo.*/

"use strict"


{
    function printTime1SecPlus(hour, min, sec){
        //WE add 1 second to the given seccond count
        sec++;
        
        if(sec>=60){
            sec = 0;
            min++

            if(min>=60){
                min = 0;
                hour++
                //Simple way to limit the values but gets the job done
                if(hour>=24){
                    hour = 0;
                }

            }
        }
        //We save the final time and print it on the console
        let finalTime = `${hour.toString()}:${min.toString()}:${sec.toString()}`
        console.log("Son las " + finalTime);
    }

    //Testing the function
    printTime1SecPlus(22,15,31);
    

}