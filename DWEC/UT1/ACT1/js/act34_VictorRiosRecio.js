/**34. Programa una función que valide que un texto sea un email válido, p.e. miFuncion
(“javier.ferrer@iesmartinezm.es”) devolverá verdadero. NOTA: caracteres, números, puntos
guión alto y bajo+@+caracteres, números+.+al menos dos caracteres */
"use strict"
{
    //the same as the regular expressions exercise
    function passwordValidator(password) {
        //https://regex101.com/
        const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$]).{1,}$/;

        if (password.length < 8) {
            console.log("the password is too short.");
            return false;
        }
        
        if(password.match(regex)){
            console.log("Good password.");
            return true;
        }
        console.log("Enter a capital letter and a special character.");
        return false;
        
    }
    
    console.log(passwordValidator("holllllA1.23@aa"));
    console.log(passwordValidator("hola"));
    console.log(passwordValidator("hollllla1.23@aa"));

}