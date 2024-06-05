import { Die_Id } from "./constants.mjs";
import Die from "./die.mjs";



export default class DieFactory {

    constructor(){

    }



    static createDie(id){

        let die = null;

        switch (id) {
            case Die_Id.DIE_3:
                die = Die.createDie(3, Die_Id.DIE_3);
                break;

            case Die_Id.DIE_5:
                die = Die.createDie(5, Die_Id.DIE_5);
                break;

            case Die_Id.DIE_20:
                die = Die.createDie(20, Die_Id.DIE_20);
                break;

            case Die_Id.DIE_100:
                die = Die.createDie(100, Die_Id.DIE_100);
                break;
        
            default:
                break;
        }

        return die;
    }

    static createAllDices(){

        const dices = [];

        dices.push(DieFactory.createDie(Die_Id.DIE_3));
        dices.push(DieFactory.createDie(Die_Id.DIE_5));
        dices.push(DieFactory.createDie(Die_Id.DIE_20));
        dices.push(DieFactory.createDie(Die_Id.DIE_100));

        return dices;

    }
}