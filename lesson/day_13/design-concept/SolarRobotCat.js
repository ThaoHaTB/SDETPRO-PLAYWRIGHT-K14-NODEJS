const RobotCat=require('./RobotCat')

class SolarRobotCat extends RobotCat{
    
       charge(){
        return super.charge() +'with solar cir';
       }
}

module.exports=SolarRobotCat;