import { getAll } from "./mediator";

class toDo{

    constructor(name, description, category){
        this.name = name;
        this.description = description;
        this.status = false;
        this.category = category;
        this.id = this.calcId();
    }

    calcId(){
        const list = getAll().count
        if(list === undefined){
            return 0
        }
        return list - 1;
    };

    complete() {
        this.status = complete
    }
}

export default toDo;
