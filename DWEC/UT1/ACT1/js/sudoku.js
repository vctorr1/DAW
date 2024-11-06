"use strict"
{
    //funcion para generar el tablero
    function generateBoard() {
        const board = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; index++) {
                const possibleNumbers = [1,2,3,4,5,6,7,8,9];
                shuffleArray(possibleNumbers);

                for (const num of possibleNumbers){
                    if (isValid(board, i, j, num)) {
                        
                    }
                }
            }
            
        }
    }

    //funcion para mezclar el array con los números posibles
    function shuffleArray(array) {
        for (let i = array.length-1; i <)1{
                      
        }
    }

}