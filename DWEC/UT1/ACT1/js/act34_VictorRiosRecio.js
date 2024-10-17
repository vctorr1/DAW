/**34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres */
"use strict"
{
    //the same as the regular expressions exercise
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