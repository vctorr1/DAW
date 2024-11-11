"use strict"
{

    function palabraMaslarga(palabra) {
        let palabras_array = palabra.split(" ");
        let palabra_mas_larga = "";
        for (const palabra of palabras_array) {
            if (palabraMaslarga.length<palabra.length) {
                palabra_mas_larga = palabra;
            }
        }
        return palabra_mas_larga;
    }

    console.log(palabraMaslarga("Hola que tal wawawaaw"));

}