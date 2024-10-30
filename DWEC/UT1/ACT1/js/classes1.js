"use strict"
{
    //nombre de clase en mayúsculas
    class Point{
        //atributos o propiedades
        cX;
        cY;

        //constructor
        constructor(cX, cY){
            this.cX=cX;
            this.cY=cY;
        }
    

        //métodos getter y setter
        get coordX(){
            return this.cX;
        }
        get coordY(){
            return this.cY;
        }

        //setters
        set coordX(x){
            this.cX = x;
        }
        set coordX(y){
            this.cY = y;
        }

        static distance(p1,p2){
            const dx = p1.cX - p2.cX;
            const dy = p1.cY - p2.cY;
            return Math.sqrt(dx*dx+dy*dy);
        }

        multiplyCoordinates(){
                return this.cX * this.cY;
        }
    }

    let p1 = new Point(0,0);
    let p2 = new Point(2,2);
    console.log(p1.coordX);//geter
    console.log(p1.coordY);//getter
    console.log(p2.coordX);//getter
    console.log(p2.coordY);//getter
    console.log(p1.cX);//NO LO USES
    console.log(p1.cY);//NO LO USES
    p2.coordX = 17; //setter
    p2.coordY= 17; //setter

    let d = Point.distance(p1,p2);
    console.log(d);

}