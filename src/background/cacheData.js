import toDo from "./createToDo";
import { getAll, addToDo } from "./mediator";

function cacheData(){
    const list = getAll();
    list.forEach(task => {
        localStorage.setItem(task.id.toString(), JSON.stringify(task));
    })
}

function test(){
    const name = prompt('enter name');
    const description = prompt('enter description');
    const category = prompt('enter category');
    
    const newTask = new toDo(name, description, category)
    console.table(newTask)
    addToDo(newTask);
    
}

export {cacheData, test}