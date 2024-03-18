import RobotCat from "./RobotCat";
export function charge(robotCatList:RobotCat[]){
    robotCatList.forEach(robotCat =>{
        console.log(robotCat.charge());
        
    });
}