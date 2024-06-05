import { Die_Id } from "./constants.mjs";


export default class Combat {

    constructor(fighters, dices, actualTurn){
        this.fighters = fighters; 
        this.dices = dices;
        this.actualTurn = actualTurn;
    }


    static create(dices, superhero, villain){

        let fighters = [];
        let actualTurn;
        let villainIntComSum;
        let superheroIntComSum;

        fighters.push(superhero);
        fighters.push(villain);

        villainIntComSum = villain.int + villain.com;
        superheroIntComSum = superhero.int + superhero.com;

        if (villainIntComSum > superheroIntComSum) {
            actualTurn = 1;
        }else if (villainIntComSum < superheroIntComSum) {
            actualTurn = 0;
        }else {
            actualTurn = 1;
        }

        return (new Combat(fighters, dices, actualTurn));
    }


    execute(){

    
        if (this.isAttackSuccessful(this.fighters[this.actualTurn].com, this.dices)) {
            this.fighters[this.actualTurn].attack((this.fighters[this.actualTurn^1]), this.dices);
        }
            
        this.actualTurn = this.actualTurn^1;
        

        return (this.hasSomeoneDied());
    }

    hasSomeoneDied(){

        let someoneIsDead = false;

        if (this.fighters[0].isDead() && this.fighters[1].isDead()) {
            console.log("----------------------------------------------------------------------------------------");            
            console.log("----------------------------------------------------------------------------------------");
            console.log(this.fighters[0].name +" and "+ this.fighters[1].name +" han sido derrotados !!!!!!");
            someoneIsDead = true;
        }else if (this.fighters[0].isDead()) {
            console.log("----------------------------------------------------------------------------------------");            
            console.log("----------------------------------------------------------------------------------------");
            console.log(this.fighters[0].name +" ha sido derrotado !!!!!!");
            someoneIsDead = true;
        }else if (this.fighters[1].isDead()) {
            console.log("----------------------------------------------------------------------------------------");            
            console.log("----------------------------------------------------------------------------------------");
            console.log(this.fighters[1].name +" ha sido derrotado !!!!!!");
            someoneIsDead = true;
        }

        return someoneIsDead;
    }

    isAttackSuccessful(com, dices){

        let die100;
        let die100Result;

        for (let i = 0; i < dices.length; i++) {
            const dice = dices[i];
            
            if (dice.id === Die_Id.DIE_100) {
                die100 = dice;
            }
        }

        die100Result = die100.roll();

        if (com >= die100Result) {
            console.log(this.fighters[this.actualTurn].name +" obtiene un "+ die100Result +" y ataca con exito");
            return true;
        }else{
            console.log(this.fighters[this.actualTurn].name +" obtiene un "+ die100Result +" y falla el ataque");
            return false;
        }
    }

    printPresentationMessages(){

        console.log("WELCOME TO THE COMBAT ARENA !!!!");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Hoy combatirán "+ this.fighters[0].name +" y "+ this.fighters[1].name +" !!!!!!!");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("Listado de atributos");
        console.log("-----------------------------------------------\n");
        console.log(this.fighters[0]);
        console.log(this.fighters[1]);
        console.log("\n-----------------------------------------------");
        console.log("El primer combate va para "+ this.fighters[this.actualTurn].name);
        console.log("-----------------------------------------------\n");
    }
}