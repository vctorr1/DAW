"use strict"
{
    //names input
    alert("Each name must contain only letters and start with upper case.")
    let p1_name = prompt("Player 1 enter your name here: ", "Player1")
    while (p1_name.match(/^[A-Z]{1}[^a-z]/g, '')) {
        p1_name = prompt("Wrong name, enter a new one ", "Player1")
    }
    let p2_name = prompt("Player 2 enter your name here:", "Player2")
    while (p2_name.match(/^[A-Z]{1}[^a-z]/g, '')) {
        p2_name = prompt("Wrong name, enter a new one ", "Player2")
    }

    let rock = "R";
    let paper = "P";
    let scissors = "S";

    /*let endGameAlert (p1_name, p2_name, winner, totalMoves, p1_wins, p2_wins, draws) => {
        alert(winner+" was the winner, the total number of moves was "+totalMoves+", "+p1_name+" won "+p1_wins+", "+p2_name+" own"+ p2_wins+" and the number on draws was "+draws);
    }*/
   //arrow function for calculating total moves


    //game runtime
    let p1_wins = 0;
    let p2_wins = 0;
    let totalMoves = 0;
    let draws = 0;

    for (let i = 0; i < 7; i++) {
        let p1_input = prompt(p1_name +" Enter your next move", "");
        /*while (p1_input !==(rock || paper || scissors)) {
            p1_input = prompt(p1_name +" Enter a correct move", "");
        }*/
        let p2_input = prompt( p2_name +" Enter your next move", "");
        /*while (p1_input !==(rock || paper || scissors)) {
            p2_input = prompt(p2_name +" Enter a correct move", "");
        }*/
        if ((p1_input === rock) && (p2_input === scissors) || (p1_input === scissors) && (p2_input === paper) || (p1_input === paper) && (p2_input ===rock)) {
            p1_wins++;
            totalMoves+=2;
            alert("The number of moves is " + totalMoves + ", " + p1_name + " won the round and the moves of "+p1_name+" and "+p2_name+ " are "+p1_input+ " and "+p2_input);
            
        }else if ((p2_input === rock) && (p1_input === scissors) || (p2_input === scissors) && (p1_input === paper) || (p2_input === paper) && (p1_input === rock) ) {
            p2_wins++;
            totalMoves+=2;
            alert("The number of moves is " + totalMoves + ", " + p2_name + " won the round and the moves of "+p1_name+" and "+p2_name+ " are "+p1_input+ " and "+p2_input);
            
        } else if(p1_input === p2_input){
            alert("There was a draw, nobody wins this round.")
            draws++;
            totalMoves+=2;
            alert("The number of moves is " + totalMoves + ", nobody won the round and the moves of "+p1_name+" and "+p2_name+ " are "+p1_input+ " and "+p2_input);
            
        }
        if (p1_wins === 4) {
            alert(p1_name+" was the winner, the total number of moves was "+totalMoves+", "+p1_name+" won "+p1_wins+", "+p2_name+" won"+ p2_wins+" and the number on draws was "+draws);
            break;
        }else if (p2_wins === 4) {
            alert(p2_name+" was the winner, the total number of moves was "+totalMoves+", "+p1_name+" won "+p1_wins+", "+p2_name+" won"+ p2_wins+" and the number on draws was "+draws);
            break;
        }else if((p1_wins < 4 || p2_wins < 4) && (i === 7)){
            alert("No one was the winner, the total number of moves was "+totalMoves+", "+p1_name+" won "+p1_wins+", "+p2_name+" won"+ p2_wins+" and the number on draws was "+draws);
            break;
        }
    }
    /*endGameAlert;*/



}