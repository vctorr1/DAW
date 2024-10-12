/**1. Email Validation
Write a function that validates whether a given string is a valid email address. The email should follow the format "user@domain.extension" and can include letters, numbers, periods, and dashes. */
"use strict"
{
    function emailValidator(email){
        //arreglar que necesites los dos caracteres
        //lookahead for searching various conditions //ARREGLAR @
        //const regex = /(?=[@]{1})*[\.+]/gi;
        //const regex = /^[A-Z0-9._-]+@[A-Z0-9-]+(?:\.[A-Z0-9-]+)*$/gi;
        //fixed the dot problem, now works fine
        const regex = /^[A-Z0-9._-]+@[A-Z0-9-]+\.[A-Z0-9-]+(?:\.[A-Z0-9-]+)*$/i;
 
        
        //Test the string against the regular expression (returns true if it's correct, just another way of doing this)
        return regex.test(email);

    }

    //testing email validator
    console.log(emailValidator("vc@gmail.com"));
    console.log(emailValidator("vc@gmailcom"));
    console.log(emailValidator("vcgmailcom"));
    console.log(emailValidator("vcgmail.com"));

}

/**2. Extract Numbers from a String
Write a function that takes a string and returns an array of all the numbers present in that string. The numbers can be integers or decimals. */
{
    function extractNumbers(text) {
        const regex = /[0-9]/g;
        //the text is searched with the regular expression and the numbers are returned
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
        //first we store the regular expression for later use
        const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$]).{1,}$/;

        if (password.length < 8) {
            console.log("The password is too short.");
            return false;
        }
        //if the password matches with the expression, return true
        if(password.match(regex)){
            console.log("Good password.");
            return true;
        }//else we return false
        console.log("Enter a capital letter and a special character.");
        return false;
        
    }
    //testing out the function
    console.log(passwordValidator("holllllA1.23@aa"));
    console.log(passwordValidator("hola"));
    console.log(passwordValidator("hollllla1.23@aa"));

}

/*4. Remove Non-Alphabetic Characters
Write a function that removes all non-alphabetic characters from a string, leaving only
letters from 'a' to 'z' (both uppercase and lowercase). */
{
    function removeNonLetters(text) {
        //the regular expression searches
        //const regex = /[^a-zA-Z]g/;
        const regex = /[^a-zA-Z]/g;

        //let letterText = text.replace(regex);
        //the non alphabetical characters are removed from the string   
        /*let letterText = text.replace(regex, "");
        return letterText;*/
        let letterText = text.replace(regex, "");
        return letterText;
        
    }
    //testing out the function, but it still displays without spaces
    console.log(removeNonLetters("hola me1 llamo vict5o4r42.8"));

}

/**5. Verify Date Format (DD/MM/YYYY) 
Write a function that verifies whether a given string matches the date format 
"DD/MM/YYYY". Ensure the range of days (01-31) and months (01-12) is correct. */
{
    function verifyDate(dateText){
        //regular expression
        //const regex = /^[01-30]{2}\/[01-12]{2}\/[0-9]{4}/;
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

        //if the regular expression matches with the input returns the good message
        if (dateText.match(regex)){
            return "The date format is correct.";

        }
        return "The date format is invalid";

    }

    console.log(verifyDate("23/02/2000"));
    console.log(verifyDate("23/32/2000"));

    //NOTE: this website was of a lot of help when trying to visualize and create the regular expressions
    //https://regexr.com/

}