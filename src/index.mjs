import Combat from "./Combat.mjs";
import DieFactory from "./Die_Factory.mjs";
import TrainingGround from "./TrainingGround.mjs";
import { Die_Id } from "./constants.mjs";
import { data } from "./db/client.mjs";




const combat = init();

combat.execute();


function init() {

  // console.log(data);

  const dices = DieFactory.createAllDices();
  // console.log(dices);

  const trainingGround = TrainingGround.create(data);
  // console.log(trainingGround);

  const superHero = trainingGround.createSuperHero();
  // console.log(superHero);

  const villain = trainingGround.createVillain();
  // console.log(villain);

  const combat = Combat.create(dices, superHero, villain);
  // console.log(combat);

  return combat;
}