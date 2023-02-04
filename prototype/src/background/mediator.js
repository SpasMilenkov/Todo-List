import toDo from './createToDo'

let toDos = [];

function addToDo(task){toDos.unshift(task);}

function deleteToDo(id){return toDos.filter(e=> e.id == id)[0];};

function completed(){return addToDo.filter(e => e.status == true);};

function pending(){return addToDo.filter(e=> e.status == false)};

function getAll(){return toDos;};

function createToDO(title, description, category, date){
    return new toDo(title, description, category, date);
}

export {addToDo, deleteToDo, completed, pending, getAll, createToDO};