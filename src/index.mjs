import DieFactory from "./Die_Factory.mjs";
import { Die_Id } from "./constants.mjs";
import { getData } from "./db/client.mjs";




init();



function init() {

  const data = getData();

  const dices = DieFactory.createAllDices();

}