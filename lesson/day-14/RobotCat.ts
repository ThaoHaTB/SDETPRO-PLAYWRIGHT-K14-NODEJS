export default class RobotCat {

    protected name: string;
    protected id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
    
    charge() {
        return 'charing...';
    }
}

