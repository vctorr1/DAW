/**1. Email Validation
Write a function that validates whether a given string is a valid email address. The email should follow the format "user@domain.extension" and can include letters, numbers, periods, and dashes. */
"use strict"
{
    function emailValidator(email){
        //arreglar que necesites los dos caracteres
        const regex = /[@+]*[\.+]/gi;
        
        //Test the string against the regular expression (returns true if it's correct, just another way of doing this)
        return regex.test(email);

    }

    //testing email validator
    console.log(emailValidator("vctorr1@gmail.com"));

}

/**2. Extract Numbers from a String
Write a function that takes a string and returns an array of all the numbers present in that string. The numbers can be integers or decimals. */
{
    function extractNumbers(text) {
        const regex = /[0-9]/g;
        const extractedNumbers = text.match(regex);
        return  extractedNumbers;
        
    }

    //testing out the function
    console.log("The extracted numbers are: " + extractNumbers("hola me1 llamo vict5o4r42.8"));

}

/**3. Password Validation
Write a function that validates whether a password meets the following criteria: at least 8 characters long, at least one uppercase letter, one lowercase letter, one number, and one special character such as @, #, or $. */
{
    function passwordValidator(password) {
        const regex = /[A-Z+]*[a-z+]/g;
        
    }

}