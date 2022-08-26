import { container } from "webpack";
import { theme } from "./applySystemTheme";

const inputInfo = [];
const form = renderForm();
// Generates the container of the form
function renderForm(){
    const container = document.createElement('div')
    container.classList.add('form');

    if(theme === 'dark'){
        container.classList.add('form-dark-theme');
        return container;
    }
    container.classList.add('form-light-theme');
    container.appendChild(categoryChoice());
    return container;
}
//Generates the category selection page
function categoryChoice(){

    const mainTitle = document.createElement('h1')
    mainTitle.textContent = 'Categories '

    container.appendChild(mainTitle);
    container.appendChild(radioButtonFactory('work', 'Work'));
    container.appendChild(radioButtonFactory('sport', 'Sport'));
    container.appendChild(radioButtonFactory('relax', 'Relax'));

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next'
    nextButton.addEventListener('click', addInfo);

    container.appendChild(nextButton);

    if(theme === 'dark'){
        nextButton.classList.add('next-button-dark')
        return container;
    }
    nextButton.classList.add('next-button-light');
    return container
}

//Generates radio buttons with titles
function radioButtonFactory(value, title){
    const container = document.createElement('div');
    container.classList.add('card-mini');
    const radio = document.createElement("INPUT");
    const radioTitle = document.createElement('h1')
    radioTitle.textContent = title;
    radio.setAttribute("type", "radio");
    radio.value = value;

    container.appendChild(radio);
    container.appendChild(radioTitle);

    return container;
}

//Function to clear the form 
function clearForm(){
    while(form.firstChild)
        form.removeChild(form.firstChild);
}


function textInputFactory(title,){
    
}


//Function to generate the add info page
function addINfo(){
    clearForm();

    textInputFactory(title)

}
