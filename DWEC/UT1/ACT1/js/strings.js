"use strict"
{

    let s = 'hello';
    let r = " and goodbye"
    console.log(s.length);

    console.log(s.toLowerCase);
    console.log(s.toUpperCase);

    console.log(r.concat(s));
    console.log(s.charAt(1));
    console.log(s.indexOf("el", 0));

    console.log(r.lastIndexOf("od"));
    console.log(r.replace("od", "OD"));
    r = r.replace("od", "OD");
    console.log(r.replaceAll("od", "OD"));
    console.log(r);

    let x = "user:password:id";
    //Separa los elementos en un array usando como comillas el elemento que le demos
    console.log(x.split(":"));

    //Recorta la cadena hasta dentro de los aprmetros dados, el segundo parámetro se recorta
    console.log(s.substring(2,4));

    r.includes("go")?console.log("YES"):console.log("NO"); //Case sensitive

    console.log(r.trim());
    console.log(s.concat);

    console.log();
}