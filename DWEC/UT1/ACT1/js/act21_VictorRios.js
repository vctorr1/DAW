/*21. Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/

{   
    function invertString(text){
   
        /*if(isNaN(text) = false){
            console.log("Introduce un texto, no números");
        }*/
        //the string is divided into an array
        let text_array = text.split("");
        let output_text;
        text_array.reverse();
        output_text = text_array.toString;

        //for loop goes through the array
        /*for(let i = 0; i < text_array.length; i++){
            output_text += text_array([i])
        }*/
        
        console.log(output_text);

        //inputText.


    }

    //testing out the function
    invertString("hola me llamo juan")

}