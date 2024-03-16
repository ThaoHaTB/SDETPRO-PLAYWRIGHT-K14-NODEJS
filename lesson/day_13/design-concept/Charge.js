class Chager{
    
    static charge(robotCarList){
        robotCarList.forEach(roboCat => {
           console.log(roboCat.charge());
        });
    }
}

module.exports=Chager;