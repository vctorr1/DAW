"use strict"

{
    let person = {
        name: "pepe",
        age: 30,
        city: "Córdoba"
    };

    console.log(person);
    console.log(person.age);
    person.age=40;
    console.log(person.age);
    console.log(person["name"]);
    person["name"] = "Francisca";
    console.log(person);

    let animal = {
        type: "gato",
        legs: 4,
        moustache: true,
        size: {
            height: 60,
            width: 30,
            length: 80
        },
        age: 4
    }

    console.log(animal);
    console.log(animal.size.width);
    console.log(animal["size"]["width"]);
    animal.size["width"]=40;

    let fullPerson = {
        name: "Óliver",
        age: 45,
        city: "granada",
        hobbies: ["dron", "bike", "go to a party", "computers"],
        contact: {
            email: "aaa@gmail.com",
            youtube: "holahola"
        },
        greet(){
            console.log("hola ");
        },
        sayMyName(){
            console.log("hola mi nombre es " + this.name + " and im "+ this.age + " years old.");
        }
    }

    fullPerson.greet("Manolo");
    fullPerson.sayMyName("Manolo");

    console.log(Object.keys(fullPerson));
    console.log(Object.keys(fullPerson));

    //Destructuring
    let {name, age, city} = fullPerson;
    console.log(name);
    console.log(age);
    console.log(city);
    city = "Sevilla";
    console.log(fullPerson);
    


}