import { data } from "./db/client.mjs";


export default class TrainingGround {

    constructor(data){
        this.data = data;
    }


    static create(){
        return (new TrainingGround(data));
    }

    createSuperHero(){




    }

    createVillain(){

    }
}