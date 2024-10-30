"use strict"

{   //que tenga una a y una o, pero lo que tienen delante no importa
    const r1=/.a.o/gimus;
    //Usando un objeto
    const r2= new RegExp(".a.o","simug");
    //esto sería lo mismo
    const r3= new RegExp(/.a.o/,"i");

    console.log(r1.source);//Devuevle la expresion regular
    console.log(r1.flags);//Devuelve los flags
    console.log(r1.flags.includes("i"));
    console.log(r1.ignoreCase);

    //Métodos para expresiones regulares
    // boolean regExp.test(str)
    // array regExp.exec(str)
    // str.match(regExp)

    //eEl segundo parametro "i" hace que ignore lower y upper case
    let r4 = new RegExp(".a.o","i");
    r4.test("GATO");
    r4.test("PERRO");
    r4.test("PaTo");
    r4.test("PATA");

    //.g = global hace una busqueda de todas las veces que encuentra el platon, no se para a la primera como str.match

    // .m multiline            //^ hace que busque al principio del texto
    const regExp1 = new RegExp("^.oot.all");
    const regExp2 = new RegExp("^.oot.all", "m");
    console.log(regExp1.multiline); //false
    console.log(regExp2.multiline); //true
    //tiene dos líneas porque usa \n
    console.log(regExp1.test("rugby\nfootball"));
    //rugby
    //football
    console.log(regExp2.test("rugby\nfootball"));

    r4=/😀.a/;
    console.log(r4.test("😀ba"));
    console.log(r4.test("\u{1F600}"));

    //.s = sticky comprueba si flag "y" 
    console.log("\nSPECIAL CHARACTERS");
    // . --> cualquier caracter
    // \ --> invierte el significado
    // \t --> tab
    // \r --> retorno de carro, se vuelve al principio de la línea
    // \n --> salto de línea
    console.log(/M.nz/.test("Manz"));
    console.log(/M.nz/.test("manz"));
    console.log(/M.nz/i.test("manz"));
    
    console.log(/A./.test("A."));
    console.log(/A./.test("Ab"));
    console.log(/A./.test("A\."));

    // \s --> representa un espacio
    // [] --> rango de caracteres, cualquiera
    // [^]  --> no existe ningun carácter de dentro de los corchetes
    // | --> alternativa, una opción u otra

    let r = /[aeiou]/i;
    console.log(r.test("a")); //true
    console.log(r.test("b")); //false
    console.log(r.test("A")); //true
    console.log(r.test("aaX")); //true
    console.log(r.test("xa")); //true

    r = /c.s.|c.ma/;
    console.log(r.test("casa")); //true
    console.log(r.test("cama")); //false
    r.test("cIma"); //true porque al .(comodín) no le importa que sea mayus o minus aunque no tenga la expresión regular i como parámetro de búsqueda

    //los caracteres dentro de [^] no deben existir
    r = /[^ca|ma]/;
    console.log(r.test("ca")); //false 
    console.log(r.test("ma")); //false
    console.log(r.test("fa")); //true
    console.log(r.test("can")); //false, no debe tener ni ca solo ni ma solo
    console.log(r.test("pancarta")); //true
    console.log(r.test("cama")); //false
    console.log(r.test("carma")); //true
    console.log(r.test("ca ma")); //true
    
    // [0-9] or \d --> un dígito 

    r=/[0-9]/;
    //r = /\d/;  es lo mismo que lo de arriba
    console.log(r.test("8")); //true
    console.log(r.test("81")); //true
    console.log(r.test("8g")); //true
    console.log(r.test("85g")); //true

    // [^0-9]
    r=/[^0-9]/;
    console.log(r.test("h3llo")); //true porque encuentra el primer elemento que es string y devuelve true
    console.log(r.test("3a")); //true porque también ha encontrado algo que no es un número
    console.log(r.test("3"));  //false

    //[A-Z]
    r=/[A-Z]/;
    console.log(r.test("X")); //true
    console.log(r.test("x")); //false
    console.log(r.test("aZ")); //true porque encuentra un resultado correcto de todas formas
    
    //[a-z]
    r=/[A-Z][a-z][0-9]/;//debe encontrar los elementos en este mismo orden
    console.log(r.test("PhL0"));  //false
    console.log(r.test("aaX"));  

    r=/[A-Za-z0-9]/;
    console.log(r.test("N1IdeA")); //true
    console.log(r.test(" ")); //false
    console.log(r.test(" 3")); //true porque encuentra un 3

    r=/[^A-Za-z0-9]/;
    console.log(r.test("PThL0")); //false
    console.log(r.test(" R")); //true porque encuentra el espacio y para de buscar para devolver el true

    // \s // [\t\r\n\f] esto significa que exista alguno de ellos por ese orden
    r=/\s/;
    console.log(r.test("ho\nla")); //true
    // \S // [\t\r\n\f] S mayúsculas es al revés, que no contenga eso
    r=/\S/
    console.log(r.test("ho\nla")); //true porque el primer elemento no es \n y entonces devuelve true

    //Anchors
    // ^ --> empieza por 
    // $ --> termina por
    r=/^mas/i;
    console.log(r.test("formas")); //false porque no empieza por mas
    console.log(r.test("masters")); //true
    console.log(r.test("másters")); //false por la tilde

    r=/do$/;
    console.log(r.test("domino")); //false 
    console.log(r.test("pedo")); //true
    
    r=/[^pe]|do$/;
    console.log(r.test("pedo")); //true

    // \b --> texto con espacios, signos de puntuación o que termine o empiecen por ahí
    r=/fo\b/;
    console.log(r.test("esto es un párrafo de texto")); //true porque encuentra fo seguido de un espacio
    console.log(r.test("esto es un párrafo.de texto")); //true
    console.log(r.test("esto es un párrafode textofo")); //true
    console.log(r.test("foesto es un párrafode texto")); //false poruqe \b tendría que estar al principio

    // \B --> lo contrario
    r=/fo\B/;
    console.log(r.test("esto es un párrafo de texto")); //false  

    // * --> 0 o más veces
    r=/a*/;
    console.log(r.test("a")); //true
    console.log(r.test("aa"));//true
    console.log(r.test("ba")); //true
    console.log(r.test("b")); //true

    // + --> 1 o más veces
    r=/a+/;
    console.log(r.test("a")); //true
    console.log(r.test("b")); //false
    console.log(r.test("ba")); //true

    // ? --> caracter anterior puede aparecer o no
    r=/disparos?/;
    console.log(r.test("escuché disparo en la habitación")); //true
    console.log(r.test("escuché disparos en la habitación")); //true

    // {n} --> caracter aparece n veces
    // {n,} --> caracter aparece n o más veces
    // {n,m} --> caracter aparece entre n y m veces
    r= /[0-9]{3}/;
    console.log(r.test("oh my God")); //false
    console.log(r.test(22)); //false
    console.log(r.test(100)); //true
    console.log(r.test(999)); //true
    console.log(r.test("h3c4b5")); //false
    console.log(r.test("aaa100aaa")); //true -- tienen que ser consecutivos para dar true
    console.log(r.test("100")); //true

    r= /[0-9]{2}$/; //con esto tednría que terminar por dos números

    console.log(r.test(9)); //false
    console.log(r.test(99)); //true
    console.log(r.test("a55")); //true
    console.log(r.test("55a")); //false
    
    r=/^[0-9]{3,}$/;
    console.log(r.test(999)); //true
    console.log(r.test(22)); //false
    console.log(r.test("222x333")); //false (falso porque no hay hueco enmedio de la expresión regular)

    r=/^[0-9]{3,}$.*[0-9]{3,}$/;
    console.log(r.test("222x333")); //true
    console.log(r.test("222xx333")); //true

    r=/^[0-9]{2,5}$/;
    console.log(r.test("222x333")); //false
    console.log(r.test("222333")); //false
    console.log(r.test("22333")); //true por que son 5 numeros
    console.log(r.test(8)); //false
    console.log(r.test(88)); //true

    //El exec funciona porque tenemos la g, que sirve para poder buscr varias veces sobre lo mismo
    r= /\b([a-z]{3})\b/gi;
    let str = "Hola a todos, amigos míos. Esto es una prueba que permititá ver que ocurre."; 
    console.log(r.exec(str)); //da "una" que es la primera palabra de 3 letras con espacio antes y depues, devolviendo un array y el index de donde la ha encontrado
    console.log(r.lastIndex); //da 38, a partir de donde termina
    console.log(r.exec(str));
    console.log(r.lastIndex);
    console.log(r.exec(str));
    console.log(r.lastIndex);
    console.log(r.exec(str));
    console.log(r.lastIndex);

    console.log("\nMATCH");
    r= /\b([a-z]{3})\b/gi;
    // str.match(regExp);
    str = "Hola a todos, amigos míos. Esto es una prueba que permititá ver que ocurre."; 
    console.log(str.match(r));

    r= /\bv([0-9]+)\.([0-9]+)\.([0-9]+)\b/;
    str =  "v1.0.21";
    console.log(str.match(r));
    
    

    



}