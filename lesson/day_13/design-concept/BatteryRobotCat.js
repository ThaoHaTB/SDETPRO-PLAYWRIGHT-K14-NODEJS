const RobotCat=require('./RobotCat')

class BatteryRobotCat extends RobotCat{
    
       charge(){
        return super.charge() +'with bettery cir';
       }
}

module.exports=BatteryRobotCat;