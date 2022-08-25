import toDo from "./createToDo";
let toDos = [];

function addToDo(task){toDos.unshift(task);}

function deleteToDo(id){return toDos.filter(e=> e.id == id)[0];};

function completed(){return addToDo.filter(e => e.status == true);};

function pending(){return addToDo.filter(e=> e.status == false)};

function getAll(){return toDos;}

export {addToDo, deleteToDo, completed, pending, getAll};