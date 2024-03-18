import BatteryRobotCat from './BatteryRobotCat';
import { charge } from './Charger';
import RobotCat from './RobotCat'
import SolarRobotCat from './SolarRoBotCat';

const solarRobotCat = new SolarRobotCat("Solar", 3);
const batteryRobotCat=new BatteryRobotCat("Battery", 2);
//console.log(robotCat.name);

charge([solarRobotCat,solarRobotCat]);