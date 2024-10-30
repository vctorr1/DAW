/**27. En un vector de números, indicar:
a. El número de elementos del vector.
b. Cuántos son pares y cuántos impares y cuáles son.
c. La suma de todos los números negativos.
d. El producto de todos los números positivos.
e. Cuántos son primos y cuáles son.
f. Los números que ocupan las posiciones pares del vector.
g. El número mayor.
h. El número menor.
i. La media de todos los números, los números que están por encima y los que están por
debajo.
j. El vector ordenado de mayor a menos y viceversa.
k. Buscar un valor introducido por el usuario e indicar si existe o no. */
"use strict"
{   //NumArray for later use
    let numArray = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];

    //a. El número de elementos del vector.
    function mostrarTablero() {
        let visualizacion = '  0 1 2\n';
        for (let i = 0; i < 3; i++) {
            visualizacion += i + ' ';
            for (let j = 0; j < 3; j++) {
                visualizacion += tablero[i][j] + '|';
            }
            visualizacion = visualizacion.slice(0, -1); // Quitar último separador
            visualizacion += '\n';
        }
        return visualizacion;
    }

    //b. Cuántos son pares y cuántos impares y cuáles son.
    function evenOrOdd(numArray){
        function verificarGanador(jugador) {
            // Verificar filas
            for (let i = 0; i < 3; i++) {
                if (tablero[i][0] === jugador && 
                    tablero[i][1] === jugador && 
                    tablero[i][2] === jugador) {
                    return true;
                }
            }
            
            // Verificar columnas
            for (let j = 0; j < 3; j++) {
                if (tablero[0][j] === jugador && 
                    tablero[1][j] === jugador && 
                    tablero[2][j] === jugador) {
                    return true;
                }
            }
            
            // Verificar diagonales
            if (tablero[0][0] === jugador && 
                tablero[1][1] === jugador && 
                tablero[2][2] === jugador) {
                return true;
            }
            if (tablero[0][2] === jugador && 
                tablero[1][1] === jugador && 
                tablero[2][0] === jugador) {
                return true;
            }
            
            return false;
        }

        //return "there are " + evenNums.length + " even numbers, "
        //returns an object literal for ease of displaying the results
        function tableroLleno() {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    if (tablero[i][j] === ' ') {
                        return false;
                    }
                }
            }
            return true;
        }
    }
    //results displayed by using literal object and array methods
    function jugadaComputadora() {
        let fila, columna;
        do {
            fila = Math.floor(Math.random() * 3);
            columna = Math.floor(Math.random() * 3);
        } while (tablero[fila][columna] !== ' ');
        
        tablero[fila][columna] = 'O';
        alert('La computadora elige posición: ' + fila + ',' + columna + '\n' + mostrarTablero());
    }

    //c. La suma de todos los números negativos.
    /*function printNegSum(numArray){
        if(isNaN(numArray)){
            numArray.forEach(num => {
                if(num <0 ){
                    let negSum = num;
                    let negSumTotal =+ negSum;
                    return negSumTotal;
                }
            
            })
        }
    };*/
    //array with negative numbers
    let negNumArray = [-1,2,3,-4,5,-6,-7,-8]

    function printNeg(numArray) {
        let negNumbers = numArray.filter(function(num){
            return num < 0; 
        })

        /*negNumbers.forEach(negNum => {
            console.log("The current negative number is " + negNum);
            
        });*/
        //array.reduce is used to sum all of the array values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
        console.log("The combined values of all the negative numbers is " + negNumbers.reduce((acum, currentValue) => acum + currentValue, 0,));
        
    }

    console.log(printNeg(negNumArray));

    //d. El producto de todos los números positivos.
    numArray.forEach(num => {
        let prod = "The product of the number " + num + " is " + num*num;
        console.log(prod);
    });

    //e. Cuántos son primos y cuáles son.
    //as of exercise "b", i'll use object literals for displaying the result too, copying from it a bit
    function isPrime(numArray){
        //prime nums array
        let primeNums = [];
      
        //internal function inside the orevius b function for determining if the numbers are prime or not
        function isPrimeInternal(num) {
          if (num <= 1) return false;
          for (let i = 2; i <= Math.sqrt(num); i++) {
            //returns false if is  not  a prime number
            if (num % i === 0) return false;
          }
          //
          return true;
        }

        //loops through the array adding each prime number to the array
        numArray.forEach(num => {
            if (isPrimeInternal(num)) {
                primeNums.push(num);
            }
        });
      
        //returns an object literal with all the data
        return {
          primeTotal: primeNums.length,
          primeNumbers: primeNums
        };
    }
    //Results displayed through object literals
    console.log("there are " + isPrime(numArray).primeTotal + " prime numbers.");
    console.log("the prime numbers are " + isPrime(numArray).primeNumbers.join() + ".");

    //f. Los números que ocupan las posiciones pares del vector.
    function getArrayEvenIndex(numArray) {
        let arrayEvenIndexes = [];

        numArray.forEach(num => {
            //if the index is even then it is pushed to the evenIndexs array
            if (num % 2 === 0) {
                arrayEvenIndexes.push(num);
            }
        });
        return arrayEvenIndexes;
    }
    console.log("the numbers in the even index positions of the array are: " + getArrayEvenIndex(numArray));



    //g. El número mayor.                           //apply must be used or else it will return NaN
    console.log("el mayor número del array es " + Math.max.apply(Math, numArray));

    //h. El número menor.
    console.log("el menor número del array es " + Math.min.apply(Math, numArray));

    /**i. La media de todos los números, los números que están por encima y los que están por
    debajo. */
    function sum(numArray){
        //returns the sum of the array elements so it can be used to find the average
        return numArray.reduce((acum, currValue) => acum + currValue, 0);
    }
    //calculate the average
    let avg = (sum(numArray) / numArray.length);

    console.log("the average of all the array values is  " + avg);

    //j. El vector ordenado de mayor a menos y viceversa.
    let numArrayUnsorted = [6,3,7,3,2,1,];
    console.log(numArrayUnsorted);
    let sortedArray = numArrayUnsorted.sort();
    //Sorted in two ways
    console.log(sortedArray);
    console.log(sortedArray.reverse());

    //k. Buscar un valor introducido por el usuario e indicar si existe o no. ARREGLAR
    /*function findValue(numArray, value) {
        let foundValue = numArray.find(value);
        console.log(foundValue);

        //if the value is found inside the array and is a number then 
        if ((foundValue = find(numArray, value)) !== false || isNaN(foundValue) !==false) {
            console.log("the value was found");
            return true;
        }else{
            console.log("the value was not found");
            return false;
        }
    }*/

        function jugar() {
            let modoJuego = confirm('¿Quieres jugar contra la computadora?\nAceptar: vs CPU\nCancelar: 2 Jugadores');
            let jugadorActual = 'X';
            let gameOver = false;
            
            alert('¡Bienvenido al Tres en Raya!\n' +
                  'Usa coordenadas (fila,columna) desde 0,0 hasta 2,2\n' +
                  mostrarTablero());
            
            while (!gameOver) {
                if (jugadorActual === 'X') {
                    let jugada = prompt('Jugador ' + jugadorActual + ', ingresa tu jugada (fila,columna):');
                    if (jugada === null) {
                        alert('Juego cancelado');
                        return;
                    }
                    
                    let [fila, columna] = jugada.split(',').map(num => parseInt(num.trim()));
                    
                    // Validar jugada
                    if (isNaN(fila) || isNaN(columna) || 
                        fila < 0 || fila > 2 || 
                        columna < 0 || columna > 2 || 
                        tablero[fila][columna] !== ' ') {
                        alert('Jugada inválida. Intenta de nuevo.');
                        continue;
                    }
                    
                    tablero[fila][columna] = jugadorActual;
                    alert(mostrarTablero());
                } else if (!modoJuego) { // Jugador 2 (solo en modo 2 jugadores)
                    let jugada = prompt('Jugador ' + jugadorActual + ', ingresa tu jugada (fila,columna):');
                    if (jugada === null) {
                        alert('Juego cancelado');
                        return;
                    }
                    
                    let [fila, columna] = jugada.split(',').map(num => parseInt(num.trim()));
                    
                    // Validar jugada
                    if (isNaN(fila) || isNaN(columna) || 
                        fila < 0 || fila > 2 || 
                        columna < 0 || columna > 2 || 
                        tablero[fila][columna] !== ' ') {
                        alert('Jugada inválida. Intenta de nuevo.');
                        continue;
                    }
                    
                    tablero[fila][columna] = jugadorActual;
                    alert(mostrarTablero());
                } else { // Turno de la computadora
                    jugadaComputadora();
                }
                
                // Verificar si hay ganador
                if (verificarGanador(jugadorActual)) {
                    if (jugadorActual === 'O' && modoJuego) {
                        alert('¡La computadora ha ganado!\n' + mostrarTablero());
                    } else {
                        alert('¡El jugador ' + jugadorActual + ' ha ganado!\n' + mostrarTablero());
                    }
                    gameOver = true;
                } else if (tableroLleno()) {
                    alert('¡Empate!\n' + mostrarTablero());
                    gameOver = true;
                }
                
                // Cambiar turno
                jugadorActual = jugadorActual === 'X' ? 'O' : 'X';
            }
            
            if (confirm('¿Quieres jugar otra vez?')) {
                tablero = [
                    [' ', ' ', ' '],
                    [' ', ' ', ' '],
                    [' ', ' ', ' ']
                ];
                jugar();
            }
        }

    console.log(findValue(numArray, 2));
    

}

jugar();