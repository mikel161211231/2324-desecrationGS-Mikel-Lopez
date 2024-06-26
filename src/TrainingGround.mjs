import SuperHero from "./SuperHero.mjs";
import Villain from "./Villain.mjs";
import { data } from "./db/client.mjs";


export default class TrainingGround {

    constructor(data){
        this.data = data;
    }


    static create(){
        return (new TrainingGround(data));
    }

    createSuperHero(){

        let superhero = null;
        do {
            let num = Math.floor(Math.random()*this.data.length);
            superhero = this.data[num];
        } while (superhero.name === "Junkpile");

        
        let name = superhero.name; // Nombre del personaje
        let int = superhero.powerstats.intelligence; // Inteligencia
        let str = superhero.powerstats.strength; // Fuerza
        let dur = superhero.powerstats.speed; // Durabilidad
        let spe = superhero.powerstats.durability; // Velocidad
        let pow = superhero.powerstats.power; // Poder
        let com = superhero.powerstats.combat; // Combate 
        let hp = str*10; // Vida

        if (hp > 666) {
            hp = 666;
        }
        return (new SuperHero(name, int, str, dur, spe, pow, com, hp));
    }

    createVillain(){
        let villain = null;
        let index = 0;

        do {
            villain = this.data[index];
            index++;
        } while (villain.name !== "Junkpile");

        
        let name = villain.name; // Nombre del personaje
        let int = villain.powerstats.intelligence; // Inteligencia
        let str = villain.powerstats.strength; // Fuerza
        let dur = villain.powerstats.speed; // Durabilidad
        let spe = villain.powerstats.durability; // Velocidad
        let pow = villain.powerstats.power; // Poder
        let com = villain.powerstats.combat; // Combate 
        let hp = str*10; // Vida

        if (hp > 666) {
            hp = 666;
        }
        return (new Villain(name, int, str, dur, spe, pow, com, hp));
    }
}