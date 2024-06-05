


export default class Character {

    constructor(name, int, str, dur, spe, pow, com, hp){

        this.name = name; // Nombre del personaje

        this.int = int; // Inteligencia
        this.str = str; // Fuerza
        this.dur = dur; // Durabilidad
        this.spe = spe; // Velocidad
        this.pow = pow; // Poder
        this.com = com; // Combate 
        this.hp = hp; // Vida
    }

    attack(){
        // Vacio, las clases que lo hereden tendran el contenido
    }

    isDead(){
        if (this.hp < 1) {
            return true;
        } else {
            return false;
        }
    }
}