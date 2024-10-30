"use strict"

{
    let showEvenUneven = (n1, n2) => {
        console.log("The even and uneven numbers between "+n1+" and "+n2+" are: ")

        /*while (n1<n2) {
            if(n1 & 1){
                console.log(n1+" es impar, ");
            }else{
                console.log(n2+" es par, ");
            }
            showEvenUneven(n1+=1);
            
            
        }*/
        if(n1 !== 0){
            if(n1 & 1){
                console.log(n1+" es impar, ");
            }else{
                console.log(n2+" es par, ");
            }
            n1--;
            showEvenUneven(n1);
        }
    }

    showEvenUneven(1,10);

}