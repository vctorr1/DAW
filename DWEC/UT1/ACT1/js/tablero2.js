//tablero
let tablero = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
/* i=0     1    2
    ['0', '1', '2'],
    ['0', '1', '2'],
    ['0', '1', '2']*/
];

function mostrarTablero() {
    let visualizacion = ' 0 1 2\n';
    for (let i = 0; i < 3; i++) {
        visualizacion += i + ' ';
        for (let j = 0; j < 3; j++) {
            visualizacion += tablero[i][j] + '|';
        }
        visualizacion = visualizacion.slice(0, -1) //quitar el ultimo separador
        visualizacion += '\n';
    }
    return visualizacion;
}

function verificarGanador(jugador) {
    //verificar filas
    for (let i = 0; i < 3; i++) {
        if (tablero[i][0] === jugador &&
            tablero[i][1] === jugador &&
            tablero[i][2] === jugador
        ) {
            return true;
        }
    }
    //verificar columnas
    for (let j = 0; j < 3; j++) {
        if (tablero[0][j] === jugador &&
            tablero[1][j] === jugador &&
            tablero[2][j] === jugador
        ) {
            return true;
        }
    }
    //verificar diagonales
    if (tablero[0][0] === jugador &&
        tablero[1][1] === jugador &&
        tablero[2][2] === jugador
    ) {
        return true;
    }
    if (tablero[2][0] === jugador &&
        tablero[1][1] === jugador &&
        tablero[0][2] === jugador
    ) {
        return true;
    }
    return false;
}

function fullBoard(tablero) {
    for(let i=0; i<3; i++){
        for(let j=0; j<3; j++){
            if(tablero[i][j] === ' '){
                return false
            }
        }
    }
    return true;
}

function realizarJugada(jugador) {
    let jugada = prompt(`${jugador} inserte su jugada (fila,columna):`);
    if(jugada === null || !(/^[0-2],[0-2]$/.test(jugada))) {
        alert("Movimiento inválido");
        return false;
    }
    
    let [fila, columna] = jugada.split(',').map(num => parseInt(num.trim()));
    
    if(tablero[fila][columna] !== ' ') {
        alert("Casilla ocupada");
        return false;
    }
    
    tablero[fila][columna] = jugador;
    alert(mostrarTablero());
    return true;
}

function play() {
    let jugadorActual = 'X';
    let gameOver = false;

    alert("Bienvenido, introduce tus movimientos como coordenadas (fila, columna)desde 0,0 hasta 2,2\n"+mostrarTablero());

    while (gameOver === false) {
        if (jugadorActual === "X") {
            let jugada = prompt(`${jugadorActual} inserte su jugada:`);
            if(jugada === null || (/^[0-2],[0-2]$/.test(jugada))===false){
                 alert("movimiento invalido"); continue;
            }
            let [fila, columna] = jugada.split(',').map(num =>parseInt(num.trim()))

            //validar jugada
            if(tablero[fila][columna] !== ' '){
                alert("jugada invalida");
                continue;
            }

            tablero[fila][columna] = jugadorActual;
            alert(mostrarTablero());

        }else if (jugadorActual === "O") {
            let jugada = prompt(`${jugadorActual} inserte su jugada:`);
            if(jugada === null || (/^[0-2],[0,2]$/.test(jugada))===false){
                 alert("movimiento invalido"); continue;
            }
            let [fila, columna] = jugada.split(',').map(num =>parseInt(num.trim()))

            //validar jugada
            if(tablero[fila][columna] !== ' '){
                alert("jugada invalida");
                continue;
            }

            tablero[fila][columna] = jugadorActual;
            alert(mostrarTablero());
        }
        //verificar si hay ganador
        if(verificarGanador(jugadorActual)){
            alert(`${jugadorActual} ha ganado la partida!`);
        }else if(tableroLleno()){
            alert("Ha ocurrido un empate")
        }

        //cambiar el turno
        if (jugadorActual === 'X') {
            jugadorActual = 'O';
        }else if(jugadorActual === 'O'){
            jugadorActual = 'X';
        }
    }
}

play();