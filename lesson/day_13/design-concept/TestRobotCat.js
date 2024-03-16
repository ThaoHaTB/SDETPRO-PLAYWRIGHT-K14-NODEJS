const SolarRobotCat = require("./SolarRobotCat");
const BatteryRobotCat=require('./BatteryRobotCat');
const Charger=require('./Charge');

//Models
const batteryRobotCat=new BatteryRobotCat();
const solarRobotCat=new SolarRobotCat();

//usage
Charger.charge([batteryRobotCat,solarRobotCat]);