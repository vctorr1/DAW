"use strict"

{
    function f2 (a, b, ...c){
        let numArray = [a,b,...c];
        let sumTotal = 0;
        numArray.forEach(num => sumTotal += num);
        return sumTotal;
    }
    console.log(f2(10, 20, 30, 40));

    let user1 = {name: "Federico", age: 35};
    let user2 = {name: "Ramón", age: 45};
    let user3 = {name: "Carlos", age: 32};

    //para ir sumando todas las edades
    function f3(u1, ...u2) {
        let totalAge = u1.age;
        let ages = u2.map(user => user.age);//[45,32]
        for(let a of ages){
            sum+=a;
        }
        return sum;
    }

    let ages = f3(user1, user2, user3);
    console.log(ages);

    function f4(u1, ...u2) {
        let totalAge = u1.age;
        let ages = u2.map(user => sum+=user.age);//[45,32]
        for(let a of ages){
            sum+=a;
        }
        return sum;
    }

    let ages2 = f4(user1, user2, user3);
    console.log(ages2);
    
}