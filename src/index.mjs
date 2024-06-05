import DieFactory from "./Die_Factory.mjs";
import TrainingGround from "./TrainingGround.mjs";
import { Die_Id } from "./constants.mjs";
import { data } from "./db/client.mjs";




init();



function init() {

  // console.log(data);

  const dices = DieFactory.createAllDices();

  const trainingGround = TrainingGround.create(data);
  console.log(trainingGround);

}