import Character from "./Character.mjs";
import { Attack_Type, Die_Id } from "./constants.mjs";



export default class SuperHero extends Character {

    constructor(name, int, str, dur, spe, pow, com, hp){

        super(name, int, str, dur, spe, pow, com, hp);
    }

    isDead(){
        if (this.hp < 1) {
            return true;
        } else {
            return false;
        }
    }

    attack(victim, dices){

        const attackType = this.attackType(dices);
        
        switch (attackType.id) {

            case Attack_Type.CRITICAL_18:
            case Attack_Type.CRITICAL_19:  
            case Attack_Type.CRITICAL_20:   
                this.criticalAttack(victim, attackType, dices);
                break;

            case Attack_Type.NORMAL:
                this.normalAttack(victim, attackType);
                break;

            case Attack_Type.FUMBLE_1:
            case Attack_Type.FUMBLE_2:
                this.fumbleAttack(victim, attackType, dices);
                break;
        
            default:
                break;
        }
    }

    attackType(dices){

        let die20;
        let die20Result;
        let attackType = { id:Attack_Type.PREPARING, value:0};

        for (let i = 0; i < dices.length; i++) {
            const dice = dices[i];
            
            if (dice.id === Die_Id.DIE_20) {
                die20 = dice;
            }
        }

        die20Result = die20.roll();

        attackType.value = die20Result;

        if (die20Result < 3) {

            // Tipo de fumble
            switch (die20Result) {
                case 1:
                    attackType.id = Attack_Type.FUMBLE_1;
                    break;

                case 2:
                    attackType.id = Attack_Type.FUMBLE_2;
                    break;
            
                default:
                    break;
            }

        }else if (die20Result > 17) {
            
            // Tipo de critico
            switch (die20Result) {
                case 18:
                    attackType.id = Attack_Type.CRITICAL_18;
                    break;

                case 19:
                    attackType.id = Attack_Type.CRITICAL_19;
                    break;

                case 20:
                    attackType.id = Attack_Type.CRITICAL_20;
                    break;
            
                default:
                    break;
            }

        }else{
            attackType.id = Attack_Type.NORMAL;
        }

        return attackType;
    }

    // Ataque normal
    normalAttack(victim, attackType){

        let totalDamage = 0;

        totalDamage += (this.pow + this.str)*(attackType.value)/100;

        victim.hp -= Math.ceil(totalDamage);

        if (attackType.id === Attack_Type.NORMAL) {
            console.log(this.name +" obtiene un "+ attackType.value +", empuña su arma y hace un daño de "+ Math.ceil(totalDamage) +" puntos \n");
        }

        
    }

    // Ataque fumble
    fumbleAttack(victim, attackType, dices){


        let die3;
        let totalDamage = 0;;
        let die3Result = 0;

        for (let i = 0; i < dices.length; i++) {
            const dice = dices[i];
            
            if (dice.id === Die_Id.DIE_3) {
                die3 = dice;
            }
        }

        if (attackType.id === Attack_Type.FUMBLE_1) {
            die3Result = die3.roll();

        }else if (attackType.id === Attack_Type.FUMBLE_2) {

            for (let i = 0; i < 4; i++) {
                die3Result += die3.roll();
            }
        }

        totalDamage += this.spe/die3Result;
        
        this.hp -= Math.floor(totalDamage);

        console.log(this.name +" obtiene un "+ attackType.value +" y se clava el arma en su pierna. Recibe un daño de "+ Math.ceil(totalDamage) +" puntos \n");
  
    }


    // Ataque critico
    criticalAttack(victim, attackType, dices){

        let die3;
        let die5;
        let totalDamage = 0;
        let dieResult = 0;
        let normalDamage;

        for (let i = 0; i < dices.length; i++) {
            const dice = dices[i];
            
            if (dice.id === Die_Id.DIE_3) {
                die3 = dice;
            }else if (dice.id === Die_Id.DIE_5) {
                die5 = dice;
            }
        }

        
        

        if (attackType.id === Attack_Type.CRITICAL_18) {
            dieResult += die3.roll();
        }else if (attackType.id === Attack_Type.CRITICAL_19) {
            for (let i = 0; i < 2; i++) {
                dieResult += die3.roll();
                
            }
        }else if (attackType.id === Attack_Type.CRITICAL_20) {
            for (let i = 0; i < 3; i++) {
                dieResult += die5.roll();
                
            }
        }

        totalDamage += ((this.int*this.dur)/100);
        totalDamage = totalDamage*dieResult;

        normalDamage = victim.hp;
        this.normalAttack(victim, attackType);
        normalDamage -= victim.hp;

        victim.hp -= Math.ceil(totalDamage);

        console.log("CRITICAL HIT!!!!! "+ this.name +" obtiene un "+ attackType.value +" y ejerce un daño de "+ (Math.ceil(totalDamage) + normalDamage)+" puntos \n");
  

    }

}