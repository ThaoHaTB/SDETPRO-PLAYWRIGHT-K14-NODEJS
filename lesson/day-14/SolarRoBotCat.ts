import RobotCat from "./RobotCat";

export default class SolarRobotCat extends RobotCat{
    
    charge(): string {
        return  super.charge() +"charing with solor circuit..."
    }
}