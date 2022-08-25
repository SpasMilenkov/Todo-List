import toDo from "./createToDo";
let toDos = [];

function addToDo(name, description, category ){
    const task = new toDo(name, description, category);
    toDos.unshift(task);
}

function deleteToDo(id){return toDos.filter(e=> e.id == id)[0];};

function completed(){return addToDo.filter(e => e.status == true);};

function pending(){return addToDo.filter(e=> e.status == false)};