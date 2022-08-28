import { getAll } from "./mediator";

class toDo{

    constructor(name, description, category, date){
        this.name = name;
        this.description = description;
        this.status = false;
        this.category = category;
        this.id = this.calcId();
        this.date = new Date(date).toLocaleString();
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
