// Inicializar el tablero
let tablero = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

// Función para mostrar el tablero en una alerta
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

// Función para verificar si hay un ganador
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

// Función para verificar si el tablero está lleno
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

// Función para la jugada de la computadora
function jugadaComputadora() {
    let fila, columna;
    do {
        fila = Math.floor(Math.random() * 3);
        columna = Math.floor(Math.random() * 3);
    } while (tablero[fila][columna] !== ' ');
    
    tablero[fila][columna] = 'O';
    alert('La computadora elige posición: ' + fila + ',' + columna + '\n' + mostrarTablero());
}

// Función principal del juego
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
            if (jugada === null || (/^[0-2],[0,2]$/.test(jugada))===false) {
                alert('Juego cancelado');
                continue;
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

// Iniciar el juego
jugar();