class Racing {
    static getWiner(animalList) {
        let animalMax=null;
        if (animalList.length === 3) {
            animalMax = animalList[0];
            for (const animal of animalList) {
                if (animal.getSpeed() > animalMax.getSpeed())
                animalMax = animal;
            }
            return animalMax;
        }
        else
            throw new Error('Please check animal list');
    }
}

module.exports=Racing;