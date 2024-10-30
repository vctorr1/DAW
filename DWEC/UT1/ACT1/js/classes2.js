"use strict"
{

    class Point2{
        //atributos privados usando #
        #cX;
        #cY;

        constructor(cX, cY){
            this.#cX = cX;
            this.#cY = cY;
        }

        get coordX(){
            return this.#cX;
        }
        get coordY(){
            return this.#cY;
        }

        set coordX(x){
            this.#cX = x;
        }
        set coordY(y){
            this.#cY = y;
        }
        
    }

    let p1 = new Point2(0,0);
    let p2 = new Point2(2,2);

    p2.coordX = 17;
    p2.coordY = 17;
    console.log(p2.coordX);
    console.log(p2.coordY);
    console.log(p2);

    //console.log(p1.#cX);

}