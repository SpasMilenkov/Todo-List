import { theme } from "./applySystemTheme";
import { addToDo, createToDO } from "../background/mediator";
import { cardFactory } from "./createVisualToDo";
import contents from "..";

const form = renderForm();
form.appendChild(categoryChoice());

// Generates the container of the form
function renderForm(){
    const container = document.createElement('div')
    container.classList.add('form');

    if(theme === 'dark'){
        container.classList.add('form-dark-theme');
        return container;
    }
    container.classList.add('form-light-theme');
    return container;
}

//Generates the category selection page
function categoryChoice(){
    const container = document.createElement('div')
    const mainTitle = document.createElement('h1')
    mainTitle.textContent = 'Categories '
    mainTitle.classList.add('main-heading', 'nunito')


    const work = radioButtonFactory('work', 'Work');
    const sport = radioButtonFactory('sport', 'Sport');
    const relax = radioButtonFactory('relax', 'Relax');

    container.appendChild(mainTitle);
    container.appendChild(work );
    container.appendChild(relax);
    container.appendChild(sport);

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', () =>{
        if(work.childNodes[0].checked === true)
            addInfo('work');
        if(relax.childNodes[0].checked === true)
            addInfo('relax');
        if(sport.childNodes[0].checked === true)
            addInfo('sport');
    });

    container.appendChild(nextButton);
    container.classList.add('form-body');

    if(theme === 'dark'){
        nextButton.classList.add('next-button-dark')
        return container;
    }

    nextButton.classList.add('next-button-light', 'sans');
    return container
}

//Generates radio buttons with titles
function radioButtonFactory(value, title){
    const container = document.createElement('div');

    const radio = document.createElement("INPUT");
    const radioTitle = document.createElement('h1')
    radioTitle.textContent = title;
    radioTitle.classList.add('main-heading', 'sans')
    radio.setAttribute("type", "radio");
    radio.value = value;

    container.appendChild(radio);
    container.appendChild(radioTitle);

    if(theme=== 'dark'){
        container.classList.add('card-mini-dark');
        return container
    }
    container.classList.add('card-mini-light');

    return container;
}

//Function to clear the form 
function clearForm(){
    while(form.firstChild)
        form.removeChild(form.firstChild);
}

//Function to generate text input fields
function textInputFactory(title){
    const container = document.createElement('div');
    container.classList.add('card-mini-dark');
    container.style.flexDirection = 'column';

    const text = document.createElement("INPUT");
    const textTitle = document.createElement('h1');
    textTitle.textContent = title;
    textTitle.classList.add('main-heading', 'sans')
    text.setAttribute("type", "text");

    container.appendChild(textTitle);
    container.appendChild(text);

    if(theme === 'dark'){
        text.classList.add('dark-text-input');
        return container
    }

    text.classList.add('light-text-input');
    return container;
    
}

//Function to generate the add info page
function addInfo(category){
    clearForm();
    const container = document.createElement('div');
    container.classList.add('form-body');
    const titleField = textInputFactory('Title:');
    const descriptionField = textInputFactory('Description:');

    const card = document.createElement('div');
    card.style.flexDirection = 'column';


    const dateInputField = document.createElement('INPUT');
    const now = new Date();
    dateInputField.value = now.toLocaleString();
    dateInputField.setAttribute('type', 'datetime');

    const dateTitle = document.createElement('h1');
    dateTitle.textContent = 'Enter deadline:';
    dateTitle.classList.add('main-heading', 'sans');

    const createButton = document.createElement('button');
    createButton.textContent = 'Create'
    createButton.addEventListener('click', () => {
        const title = titleField.childNodes[1].value;
        const description = descriptionField.childNodes[1].value;
        const date = dateInputField.value;
        const toDo = createToDO(title, description, category, date)
        addToDo(toDo);
        const toDoCard = cardFactory(toDo);
        contents.removeChild(contents.childNodes[contents.childElementCount - 1]);
        contents.appendChild(toDoCard)
        

    })

    container.appendChild(titleField);
    container.appendChild(descriptionField);
    card.appendChild(dateTitle);
    card.appendChild(dateInputField);
    container.appendChild(card);
    container.appendChild(createButton);


    form.appendChild(container);
    
    if(theme=== 'dark'){
        card.classList.add('card-mini-dark');
        dateInputField.classList.add('dark-text-input', 'sans');
        return;
    }

    card.classList.add('card-mini-light');
    dateInputField.classList.add('light-text-input', 'sans');
}

export {form}