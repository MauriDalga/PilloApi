/*
Forma 1

class Triangle{
    constructor(sideOne, sideTwo, sideThree){
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }
}*/


//Forma 2

class Triangle{
    constructor({sideOne, sideTwo, sideThree}){
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
    }
}

module.exports = Triangle;