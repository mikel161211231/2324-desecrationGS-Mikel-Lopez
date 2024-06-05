



export default class Die {

    constructor(values, id){
        this.values = values; // Los valores del dado en un array
        this.id = id;
    }

    static createDie(num, id){
        const values = [];
        for (let i = 1; i < (num +1); i++) {
            values.push(i);
        }

        return (new Die(values, id));
    }

    roll(){
        let result = -1;
        let position = -1;
        
        position = Math.floor(Math.random()*this.values.length);
        result = this.values[position];

        return result;
    }

}