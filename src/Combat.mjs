

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
}