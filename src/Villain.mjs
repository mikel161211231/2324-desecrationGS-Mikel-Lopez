import Character from "./Character.mjs";



export default class Villain extends Character {

    constructor(name, int, str, dur, spe, pow, com, hp){

        super(name, int, str, dur, spe, pow, com, hp);
    }

    attack(){
        //  Se modificara mas adelante para el heroe
    }
}