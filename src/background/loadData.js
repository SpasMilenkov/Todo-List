import { addToDo, getAll } from "./mediator";

function loadData(){
    const items = allStorage();
    items.forEach(element => addToDo(JSON.parse(element)));
}

function allStorage() {

    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

export default loadData