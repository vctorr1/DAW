/**28. En un vector de cadenas, indicar: 
a. La cadena más corta. 
b. La cadena más larga. 
c. La cadena con más letras ‘a’. 
d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. */
"use strict"

{//a. La cadena más corta. 
    let textArray = ["hola","me","llamo","vcitor,"," encantado.",];

    function findShortestString(textArray) {
    
        //reduce loops through the array finding the shortest string 
        return textArray.reduce((shortest, current) => {
            return current.length < shortest.length ? current : shortest;
        });
    }

  console.log("The shortest string is:", findShortestString(textArray));

    //b. La cadena más larga. 
    function findLongestString(textArray) {
    
        //reduce loops through the array finding the shortest string 
        return textArray.reduce((longest, current) => {
            return current.length > longest.length ? current : longest;
        });
    
    }

    console.log("The longest string is:", findLongestString(textArray));

    //c. La cadena con más letras ‘a’. 
    function findAString(textArray){
        
        //reduce loops throud the string array searching with the regular expression 
        return textArray.reduce((maxString, currentString)=> {
            let currentCount = (currentString.match(/a/gi) || []).length;
            const maxCount = (maxString.match(/a/gi) || []).length;
            //the current and max count strings are compared and returns the one with the most A's
            /*if (currentCount > maxCount) {
                return currentString;
            }else{
                return maxString;
            }*/
            return currentCount > maxCount ? currentString : maxString;
        });
    }

    console.log("The word with the most A's is: " + findAString(textArray));

    //d. Cuántas cadenas hay que tengan la ‘b’ y cuáles son. */
    function findBString(textArray) {
        let letterCounter = 0;
        //Strings with b stored as an array
        let BStrings = [];
        
        //I don't know why but it's not working with .filter
        //filter creates a new array with the matching results
       /*BStrings = textArray.filter(string => /b/i.test(string));
        letterCounter = BStrings.length;
        return {
            BQuantity: letterCounter, 
            BWords: BStrings
        };*/
        //I realized after that it ineed worked, I was just not giving it an array with any b's
        textArray.forEach(string => {
            if (/b/i.test(string)) {
                BStrings.push(string);
                letterCounter++;
            }
        });
        return {
            BQuantity: letterCounter, 
            BWords: BStrings
        };


    }
    let textArray2 = ["hola","me","llamo","vcitor,"," encantbado.",];
    console.log("The words with b are " + findBString(textArray2).BWords);
    console.log("There are  " + findBString(textArray2).BQuantity + "   words with B.");


}