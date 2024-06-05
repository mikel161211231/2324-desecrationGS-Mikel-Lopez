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
            this.fighters[this.actualTurn].attack(this.fighters[this.actualTurn]^1, this.dices);
        }else{
            this.actualTurn = this.actualTurn^1;
            console.log("Attack not successful!!!!");
        }
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
            return true;
        }else{
            return false;
        }
    }
}